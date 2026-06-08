// --- MAIN PAGE LOGIC ---

$(document).ready(function() {

    // ==========================================
    // --- 1. REQUEST PAGE SCRIPT ---
    // ==========================================

    // UI Elements
    const reqTypeDropdown = $('#type');
    const reqAreaDropdown = $('#area');
    const reqSubAreaDropdown = $('#subArea');
    const reqResultCard = $('#resultCard');
    const reqRequirementsPara = $('#requirements');
    const reqSearchInput = $('#req_search_input');
    const reqSearchResults = $('#req_search_results_container');

    // Initialize Select2
    reqTypeDropdown.select2({ placeholder: "Select Type" });
    reqAreaDropdown.select2({ placeholder: "Select Area" });
    reqSubAreaDropdown.select2({ placeholder: "Select Sub Area" });

    // Populate Type Dropdown from Data
    for (const type in data) {
        reqTypeDropdown.append(new Option(type, type));
    }
    reqTypeDropdown.val(null).trigger('change');

    // Cascade Type -> Area
    reqTypeDropdown.on('change', () => {
        reqAreaDropdown.empty().append('<option value=""></option>');
        reqSubAreaDropdown.empty().append('<option value=""></option>');
        reqResultCard.hide();
        const selectedType = reqTypeDropdown.val();

        if (selectedType && data[selectedType]) {
            for (const area in data[selectedType]) {
                reqAreaDropdown.append(new Option(area, area));
            }
        }
        reqAreaDropdown.val(null).trigger('change');
        reqSubAreaDropdown.val(null).trigger('change');
    });

    // Cascade Area -> Sub Area
    reqAreaDropdown.on('change', () => {
        reqSubAreaDropdown.empty().append('<option value=""></option>');
        reqResultCard.hide();
        const selectedType = reqTypeDropdown.val();
        const selectedArea = reqAreaDropdown.val();

        if (selectedType && selectedArea && data[selectedType][selectedArea]) {
            for (const subArea in data[selectedType][selectedArea]) {
                reqSubAreaDropdown.append(new Option(subArea, subArea));
            }
        }
        reqSubAreaDropdown.val(null).trigger('change');
    });

    // Display Requirements
    reqSubAreaDropdown.on('change', () => {
        const selectedType = reqTypeDropdown.val();
        const selectedArea = reqAreaDropdown.val();
        const selectedSubArea = reqSubAreaDropdown.val();

        if (selectedType && selectedArea && selectedSubArea &&
            data[selectedType] && data[selectedType][selectedArea]) {

            const requirements = data[selectedType][selectedArea][selectedSubArea];
            if (requirements && requirements.trim() !== "") {
                reqRequirementsPara.html(requirements.replace(/\n/g, '<br>'));
                reqResultCard.show();
            } else {
                reqResultCard.hide();
            }
        } else {
            reqResultCard.hide();
        }
    });

    // --- Request Page Smart Search ---
    reqSearchInput.on('input', function() {
        const term = $(this).val().trim().toLowerCase();
        reqSearchResults.empty().hide();

        if (term.length < 2) return;

        const results = [];
        for (const type in data) {
            for (const area in data[type]) {
                for (const subArea in data[type][area]) {
                    if (subArea.toLowerCase().includes(term)) {
                        results.push({ type, area, subArea });
                    }
                }
            }
        }

        if (results.length > 0) {
            results.slice(0, 20).forEach(res => {
                const item = $(`
                    <div class="search-result-item" data-type="${res.type}" data-area="${res.area}" data-subarea="${res.subArea}">
                        <div class="result-title">${res.subArea}</div>
                        <div class="result-category">${res.type} > ${res.area}</div>
                    </div>
                `);
                reqSearchResults.append(item);
            });
            reqSearchResults.show();
        }
    });

    // Handle Selection from Search Results
    reqSearchResults.on('click', '.search-result-item', function() {
        const type = $(this).data('type');
        const area = $(this).data('area');
        const subArea = $(this).data('subarea');

        reqTypeDropdown.val(type).trigger('change');

        setTimeout(() => {
            reqAreaDropdown.val(area).trigger('change');
            setTimeout(() => {
                reqSubAreaDropdown.val(subArea).trigger('change');
            }, 50);
        }, 50);

        reqSearchInput.val('');
        reqSearchResults.empty().hide();
    });


    // ==========================================
    // --- 2. SOCIAL MEDIA SCRIPT PAGE ---
    // ==========================================

    // UI Elements
    const smAreaDropdown = $('#sm_area');
    const smSubAreaDropdown = $('#sm_subArea');
    const smResultCard = $('#sm_resultCard');
    const smCopyContainer = $('#sm_copy_container');
    const smCopyBtn = $('#sm_copy_btn');
    const smSearchInput = $('#script_search_input');
    const smSearchResults = $('#search_results_container');

    // Initialize Select2
    smAreaDropdown.select2({ placeholder: "Select Area" });
    smSubAreaDropdown.select2({ placeholder: "Select Sub Area" });

    // Populate Area Dropdown
    for (const area in socialMediaData) {
        smAreaDropdown.append(new Option(area, area));
    }
    smAreaDropdown.val(null).trigger('change');

    // Cascade Area -> Sub Area
    smAreaDropdown.on('change', () => {
        smSubAreaDropdown.empty().append('<option value=""></option>');
        smResultCard.hide();
        currentSocialMediaScript = null;
        const selectedArea = smAreaDropdown.val();

        if (selectedArea && socialMediaData[selectedArea]) {
            for (const subArea in socialMediaData[selectedArea]) {
                smSubAreaDropdown.append(new Option(subArea, subArea));
            }
        }
        smSubAreaDropdown.val(null).trigger('change');
    });

    // Display Script Content
    smSubAreaDropdown.on('change', () => {
        const selectedArea = smAreaDropdown.val();
        const selectedSubArea = smSubAreaDropdown.val();

        if (selectedArea && selectedSubArea && socialMediaData[selectedArea][selectedSubArea]) {
            const script = socialMediaData[selectedArea][selectedSubArea];
            currentSocialMediaScript = script;

            $('#script_en_content').html(script.english);
            $('#script_ar_content').html(script.arabic);
            updateScriptLanguageView();
            smResultCard.show();
            smCopyContainer.show();
        } else {
            smResultCard.hide();
            smCopyContainer.hide();
            currentSocialMediaScript = null;
        }
    });

    // --- Social Media Deep Search ---
    smSearchInput.on('input', function() {
        const searchTerm = $(this).val().trim().toLowerCase();
        smSearchResults.empty().hide();

        if (searchTerm.length < 2) return;

        const results = [];
        for (const area in socialMediaData) {
            for (const subArea in socialMediaData[area]) {
                const scriptData = socialMediaData[area][subArea];
                // Clean HTML tags for searching
                const cleanEn = scriptData.english ? scriptData.english.replace(/<[^>]*>/g, '').toLowerCase() : '';
                const cleanAr = scriptData.arabic ? scriptData.arabic.replace(/<[^>]*>/g, '').toLowerCase() : '';

                if (subArea.toLowerCase().includes(searchTerm) ||
                    cleanEn.includes(searchTerm) ||
                    cleanAr.includes(searchTerm)) {
                    results.push({ area, subArea });
                }
            }
        }

        if (results.length > 0) {
            results.slice(0, 50).forEach(result => {
                const resultItem = $(`<div class="search-result-item" data-area="${result.area}" data-subarea="${result.subArea}"><div class="result-title">${result.subArea}</div><div class="result-category">in ${result.area}</div></div>`);
                smSearchResults.append(resultItem);
            });
            smSearchResults.show();
        }
    });

    // Handle Selection from Search Results
    smSearchResults.on('click', '.search-result-item', function() {
        const area = $(this).data('area');
        const subArea = $(this).data('subarea');

        smAreaDropdown.val(area).trigger('change');
        setTimeout(() => smSubAreaDropdown.val(subArea).trigger('change'), 100);

        smSearchInput.val('');
        smSearchResults.empty().hide();
    });

    // Copy Button Handler
    smCopyBtn.on('click', function() {
        if (!currentSocialMediaScript) return;
        const textToCopy = (currentLanguage === 'ar' ? currentSocialMediaScript.arabic : currentSocialMediaScript.english).replace(/<br\s*\/?>/gi, "\n").replace(/<\/?b>/gi, "");

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = $(this).text();
            $(this).text(currentLanguage === 'ar' ? 'تم النسخ!' : 'Copied!');
            setTimeout(() => $(this).text(originalText), 2000);
        });
    });


    // ==========================================
    // --- 3. COMPLAINT SEARCH TOOL SCRIPT ---
    // ==========================================

    // UI Elements
    const compTypeDropdown = $('#comp_type');
    const compAreaDropdown = $('#comp_area');
    const compSubAreaDropdown = $('#comp_subArea');
    const compResultCard = $('#comp_resultCard');
    const compSearchInput = $('#comp_search_input');
    const compSearchResults = $('#comp_search_results_container');

    // Initialize Select2
    compTypeDropdown.select2({ placeholder: "Select Type" });
    compAreaDropdown.select2({ placeholder: "Select Area" });
    compSubAreaDropdown.select2({ placeholder: "Select Sub Area" });

    let currentComplaintData = null;

    // Populate Complaint Type
    for (const type in complaintData) {
        compTypeDropdown.append(new Option(type, type));
    }
    compTypeDropdown.val(null).trigger('change');

    // Cascade Type -> Area
    compTypeDropdown.on('change', () => {
        compAreaDropdown.empty().append('<option value=""></option>');
        compSubAreaDropdown.empty().append('<option value=""></option>');
        compResultCard.hide();
        const selectedType = compTypeDropdown.val();

        if (selectedType && complaintData[selectedType]) {
            for (const area in complaintData[selectedType]) {
                compAreaDropdown.append(new Option(area, area));
            }
        }
        compAreaDropdown.val(null).trigger('change');
        compSubAreaDropdown.val(null).trigger('change');
    });

    // Cascade Area -> Sub Area
    compAreaDropdown.on('change', () => {
        compSubAreaDropdown.empty().append('<option value=""></option>');
        compResultCard.hide();
        const selectedType = compTypeDropdown.val();
        const selectedArea = compAreaDropdown.val();

        if (selectedType && selectedArea && complaintData[selectedType][selectedArea]) {
            for (const subArea in complaintData[selectedType][selectedArea]) {
                compSubAreaDropdown.append(new Option(subArea, subArea));
            }
        }
        compSubAreaDropdown.val(null).trigger('change');
    });

    // Display Complaint Data
    compSubAreaDropdown.on('change', () => {
        const selectedType = compTypeDropdown.val();
        const selectedArea = compAreaDropdown.val();
        const selectedSubArea = compSubAreaDropdown.val();

        if (selectedType && selectedArea && selectedSubArea &&
            complaintData[selectedType] &&
            complaintData[selectedType][selectedArea] &&
            complaintData[selectedType][selectedArea][selectedSubArea]) {

            const dataObj = complaintData[selectedType][selectedArea][selectedSubArea];
            currentComplaintData = dataObj;

            // Handle Related CC Box Style
            const relatedCC = dataObj["Related_CC_&_Not"] || "No";
            $('#comp_related_cc_val').text(relatedCC);
            const ccBox = $('#comp_related_cc_box');
            ccBox.removeClass('cc-green cc-red');
            if (relatedCC.toLowerCase() === 'yes') {
                ccBox.addClass('cc-green');
            } else {
                ccBox.addClass('cc-red');
            }

            // Fill Content Fields
            $('#comp_reason_content').text(dataObj["Reason"] || "N/A");
            $('#comp_template_content').text(dataObj["Template"] || "N/A");
            let reqText = dataObj["Requirements"] || "N/A";
            $('#comp_req_content').html(reqText.replace(/\n/g, '<br>'));
            $('#comp_ticket_val').text(dataObj["Ticket"] || "No");

            compResultCard.show();
        } else {
            compResultCard.hide();
        }
    });

    // --- Complaint Tool Smart Search ---
    compSearchInput.on('input', function() {
        const term = $(this).val().trim().toLowerCase();
        compSearchResults.empty().hide();

        if (term.length < 2) return;

        const results = [];
        for (const type in complaintData) {
            for (const area in complaintData[type]) {
                for (const subArea in complaintData[type][area]) {
                    const details = complaintData[type][area][subArea];
                    const reason = details["Reason"] || "";

                    const matchFound =
                        type.toLowerCase().includes(term) ||
                        area.toLowerCase().includes(term) ||
                        subArea.toLowerCase().includes(term) ||
                        reason.toLowerCase().includes(term) ||
                        (details["Template"] && details["Template"].toLowerCase().includes(term));

                    if (matchFound) {
                        results.push({
                            type: type,
                            area: area,
                            subArea: subArea,
                            reason: reason,
                            preview: subArea
                        });
                    }
                }
            }
        }

        if (results.length > 0) {
            results.slice(0, 50).forEach(res => {
                let shortReason = res.reason.length > 100 ? res.reason.substring(0, 100) + "..." : res.reason;
                const item = $(`
                    <div class="search-result-item" 
                         data-type="${res.type}" 
                         data-area="${res.area}" 
                         data-subarea="${res.subArea}">
                        <div class="result-title">${res.preview}</div>
                        <div class="result-category">${res.type} > ${res.area}</div>
                        <div class="result-reason" style="font-size: 0.85em; color: #aaa; margin-top: 4px;">
                            <span style="color: #4A9DEC;">Reason:</span> ${shortReason}
                        </div>
                    </div>
                `);
                compSearchResults.append(item);
            });
            compSearchResults.show();
        }
    });

    // Handle Selection from Search Results
    compSearchResults.on('click', '.search-result-item', function() {
        const type = $(this).data('type');
        const area = $(this).data('area');
        const subArea = $(this).data('subarea');

        compTypeDropdown.val(type).trigger('change');

        setTimeout(() => {
            compAreaDropdown.val(area).trigger('change');
            setTimeout(() => {
                compSubAreaDropdown.val(subArea).trigger('change');
            }, 50);
        }, 50);

        compSearchInput.val('');
        compSearchResults.empty().hide();
    });

    // Copy Full Complaint Details Button
    $('#btn_copy_comp_all').on('click', function() {
        if (!currentComplaintData) return;

        const templateText = currentComplaintData["Template"] || "";
        let reqRaw = currentComplaintData["Requirements"] || "";
        let reqClean = reqRaw.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags

        const fullTextToCopy = `${templateText}\n${reqClean}`;

        navigator.clipboard.writeText(fullTextToCopy).then(() => {
            const originalText = $(this).text();
            $(this).text("Copied! ✓");
            $(this).css('background-color', '#155724');
            setTimeout(() => {
                $(this).text(originalText);
                $(this).css('background-color', '');
            }, 1500);
        });
    });


    // ==========================================
    // --- 4. GLOBAL HANDLERS ---
    // ==========================================

    // Language Switcher
    $('#lang-en').on('click', () => switchLanguage('en'));
    $('#lang-ar').on('click', () => switchLanguage('ar'));

    // Initialize Home Slider
    initSlider();

}); // --- END OF $(document).ready() ---


// ==========================================
// --- 5. GLOBAL FUNCTIONS & UTILITIES ---
// ==========================================

// Global Variables
let currentPage = 'home';
let currentLanguage = 'en';
let currentSocialMediaScript = null;
let currentComplaintData = null;

// Page Navigation
function showPage(pageId) {
    $('.page').removeClass('active');
    $(`#${pageId}`).addClass('active');
    $('.nav-links a').removeClass('active');

    // Set active class for the clicked link
    $(`.nav-links a[onclick="showPage('${pageId}')"]`).addClass('active');

    currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Language Switching Logic
function switchLanguage(lang) {
    if (currentLanguage === lang) return;
    currentLanguage = lang;
    $('.lang-toggle button').removeClass('active');
    $(`#lang-${lang}`).addClass('active');
    updateScriptLanguageView();
    $('#sm_copy_btn').text(lang === 'ar' ? 'نسخ' : 'Copy Script');
}

// Update Script View based on Language
function updateScriptLanguageView() {
    if (currentLanguage === 'en') {
        $('#script_ar_container').hide();
        $('#script_en_container').show();
    } else {
        $('#script_en_container').hide();
        $('#script_ar_container').show();
    }
}

// Visual Effects (Parallax & Shapes)
document.addEventListener('mousemove', (e) => {
    // Background Shapes Parallax
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translate(${(x - 0.5) * speed * 20}px, ${(y - 0.5) * speed * 20}px)`;
    });

    // 3D Parallax Background Effect
    const layers = document.querySelectorAll(".layer");
    layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        if (speed) {
            const px = (window.innerWidth - e.pageX * speed) / 100;
            const py = (window.innerHeight - e.pageY * speed) / 100;
            layer.style.transform = `translateX(${px}px) translateY(${py}px)`;
        }
    });
});

window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.bg-shapes');
    if (parallax) parallax.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
});

// Card Toggle Logic (Used in Complaint Form & Script Page)
function toggleCard(cardId) {
    const cardContent = document.getElementById(cardId);
    const cardHeader = cardContent.previousElementSibling;
    cardContent.classList.toggle('show');

    const isExpanded = cardContent.classList.contains('show');
    cardHeader.setAttribute('aria-expanded', isExpanded);
}

// Copy Template Function (For Request/Complaint Form Pages)
function copyTemplate(cardId) {
    let templateText = "";
    const cardElement = document.getElementById(cardId);
    if (!cardElement) {
        console.error("Card element not found:", cardId);
        return;
    }

    const initialParagraph = cardElement.querySelector('p:not(.note)');
    if (initialParagraph) {
        templateText += `${initialParagraph.textContent.trim()}\n\n`;
    }

    const elements = cardElement.querySelectorAll('.form-row input, .form-row select');

    elements.forEach(element => {
        const labelElement = element.closest('.form-row').querySelector('label');
        let label = labelElement ? labelElement.textContent.replace(':', '').trim() : 'Unknown Field';
        let value = element.value;

        if (element.type === 'date' && value) {
            const [year, month, day] = value.split('-');
            value = `${day}/${month}/${year}`;
        }

        if (!value) {
            value = ``;
        } else if (element.tagName === 'SELECT' && value === '') {
            value = '[Select an option]';
        }

        templateText += `${label}: ${value}\n`;
    });

    templateText = templateText.trim();
    navigator.clipboard.writeText(templateText).then(() => {
        alert('Template copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy template.');
    });
}

// Clear Inputs Function
function clearInputs(cardId) {
    const cardElement = document.getElementById(cardId);
    if (!cardElement) {
        console.error("Card element not found for clearing:", cardId);
        return;
    }
    const inputs = cardElement.querySelectorAll('.form-row input, .form-row select');
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('is-invalid');
    });
}

// --- HOME SLIDER LOGIC ---
let slideIndex = 0;
let slideInterval;

function initSlider() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        showSlides(slideIndex);
        startSlideShow();
    }
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    if (n >= slides.length) { slideIndex = 0; } else if (n < 0) { slideIndex = slides.length - 1; } else { slideIndex = n; }

    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
}

window.changeSlide = function(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex + n);
    startSlideShow();
};

function startSlideShow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showSlides(slideIndex + 1);
    }, 5000);
}