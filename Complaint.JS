const complaintData = {
    "Accounts": {
        "Account": {
            "Wrong Narrative / statement": {
                "Reason": `•Incorrect description, date, or merchant name appearing on the statement.<br>•The description for a transaction on the statement is incorrect, or the statement balance is wrong.`,
                "Requirements": `• Account Number:<br>• Statement Date:<br>• Details of the incorrect item (Transaction, Balance, etc.):<br>• Correct Information (if known):<br>• Specific Cause: (Wrong Merchant Name / Incorrect Date / Unintelligible Narrative)`,
                "Template": `CM complaining about Wrong Narrative / statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Collection Deduction": {
                "Reason": `•Dispute regarding late payment fees, legal fees, or debt collection charges.<br>•A deduction by the bank's collection department is disputed by the customer.`,
                "Requirements": `• Account Number:<br>• Deduction Amount:<br>• Deduction Date:<br>• Reason for Dispute:<br>• Specific Cause: (Unjustified Late Fee / Legal Fee Error / Exempt Account Charged)`,
                "Template": `CM complaining about Collection Deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cheque rejection": {
                "Reason": `•Cheque returned unpaid due to signature, funds, or technical reasons disputed by customer.<br>•A cheque issued by the customer was rejected by the bank.`,
                "Requirements": `• Account Number:<br>• Cheque Number:<br>• Cheque Amount:<br>• Beneficiary Name:<br>• Reason for rejection (if known):<br>• Specific Cause: (Wrongful Dishonor / Signature Dispute / System Error)`,
                "Template": `CM complaining about Cheque rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Closure without Cst permission": {
                "Reason": `•Account closed by bank (Compliance/Risk/Dormancy) without customer consent.<br>•The customer's account was closed without their consent or prior notification.`,
                "Requirements": `• Account Number:<br>• Customer Full Name:<br>• Approximate Date of Closure:<br>• Specific Cause: (Unnotified Risk Closure / Error in Auto-Closure / Wrong Account Closed)`,
                "Template": `CM complaining about Closure without Cst permission a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Statement Delivery Reprint": {
                "Reason": `•Issues related to requesting and receiving a duplicate past statement.<br>•Customer is requesting a physical copy of a past statement to be printed and delivered.`,
                "Requirements": `• Account Number:<br>• Statement Month & Year:<br>• Confirmation of Delivery Address:<br>• Request Date:<br>• Specific Cause: (Reprint Not Received / Incorrect Period Printed / High Reprint Fee)`,
                "Template": `CM complaining about Statement Delivery Reprint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Duplicated customer number": {
                "Reason": `•Customer has multiple CIFs (Customer Information Files) causing system conflicts.<br>•The customer has been assigned more than one Customer ID number in the bank's system.`,
                "Requirements": `• Customer Full Name:<br>• National ID:<br>• All known Customer ID numbers:<br>• CIF Numbers:<br>• Specific Cause: (Duplicate CIF Creation / Merge Failure / Data Conflict)`,
                "Template": `CM complaining about Duplicated customer number a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong deduction": {
                "Reason": `•Unidentified or incorrect debit transaction on the account.<br>•An unfamiliar bank fee or a duplicate charge has been deducted from the account.`,
                "Requirements": `• Account Number:<br>• Transaction Date:<br>• Disputed Amount:<br>• Narrative/Description from Statement:<br>• Reason for dispute (unrecognized fee, duplicate charge, etc.):<br>• Specific Cause: (Unknown Debit / System Glitch / Amount Mismatch)`,
                "Template": `CM complaining about Wrong deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Admin fees": {
                "Reason": `•Dispute over monthly/quarterly account maintenance charges.<br>•The customer is disputing an administrative fee (e.g., annual fee, account maintenance fee).`,
                "Requirements": `• Account Number:<br>• Fee Amount:<br>• Fee Charging Date:<br>• Name of the Fee from Statement:<br>• Specific Cause: (Exempt Account Charged / Fee Duplication / Tariff Mismatch)`,
                "Template": `CM complaining about Admin fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Balance Certificate delay": {
                "Reason": `•Request for balance certificate exceeded the Turn Around Time (TAT).<br>•There is a delay in the issuance or delivery of a requested balance certificate.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Branch where request was made:<br>• Service Request (SR) Number (if available):<br>• Policy number:<br>• Specific Cause: (TAT Breach / System Delay / Branch Process Failure)`,
                "Template": `CM complaining about Balance Certificate delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Held Item": {
                "Reason": `•Amount blocked on account without clear reason or expired hold.<br>•A cheque deposited by the customer is on hold, and funds are not available after the standard clearing period.`,
                "Requirements": `• Account Number:<br>• Cheque Amount & Number:<br>• Date of Deposit:<br>• Expected Clearing Date:<br>• Held Amount:<br>• Specific Cause: (Unjustified Lien / Expired Hold / System Error Block)`,
                "Template": `CM complaining about Held Item a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hold Mail Fees": {
                "Reason": `•Charges applied for "Hold Mail" service disputed by customer.<br>•The customer is disputing a fee for the 'Hold Mail' service.`,
                "Requirements": `• Account Number:<br>• Fee Amount:<br>• Fee Charging Date:<br>• Specific Cause: (Service Not Requested / Fee Overcharge / Service Cancelled but Charged)`,
                "Template": `CM complaining about Hold Mail Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Interest Calc. Methodology": {
                "Reason": `•Customer disagrees with how the bank calculates interest (days/rate base).<br>•The customer has a query or complaint about how interest is calculated on their account.`,
                "Requirements": `• Account Number:<br>• Statement Period in question:<br>• Specific question about the calculation:<br>• Specific Cause: (Disagreement with Logic / Rate Basis Dispute / Days Count Error)`,
                "Template": `CM complaining about Interest Calc. Methodology a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Interest not added": {
                "Reason": `•Credit interest was not deposited on the due date.<br>•Earned interest has not been credited to the customer's account for the period.`,
                "Requirements": `• Account Number:<br>• Statement Period:<br>• Expected Interest Amount (if known):<br>• Due Date:<br>• Expected Amount:<br>• Specific Cause: (Missing Interest Credit / System Failure / Wrong Cycle)`,
                "Template": `CM complaining about Interest not added a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mail Charges Fees": {
                "Reason": `•Deductions for physical mail delivery disputed.<br>•The customer is disputing a fee for receiving physical statements or other documents via mail.`,
                "Requirements": `• Account Number:<br>• Fee Amount:<br>• Fee Charging Date:<br>• Specific Cause: (Digital Only Customer / Duplicate Mail Charge)`,
                "Template": `CM complaining about Mail Charges Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Statement - Opened Envelop": {
                "Reason": `•Statement delivered unsealed or tampered with (Privacy issue).<br>•The customer received their bank statement in an envelope that was already opened or appeared tampered with.`,
                "Requirements": `• Account Number:<br>• Statement Month:<br>• Delivery Date:<br>• Specific Cause: (Tampered Envelope / Poor Handling / Privacy Breach)`,
                "Template": `CM complaining about Statement - Opened Envelop a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Coding delay": {
                "Reason": `•Delay in setting up account parameters/schemes on the core system.<br>•A backend processing delay for a customer request (e.g., updating details) has occurred.`,
                "Requirements": `• Account Number:<br>• Type of Request:<br>• Date of Request:<br>• SR Number (if available):<br>• Specific Cause: (Back Office Delay / Parameter Setup Failure)`,
                "Template": `CM complaining about Coding delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Misleading Information": {
                "Reason": `•Staff provided incorrect details about account features or fees.<br>•A bank representative provided incorrect information about a product, feature, or fee.`,
                "Requirements": `• Details of information provided:<br>• Name of Staff (if known):<br>• Date & Location of interaction (Branch/Call):<br>• How the misinformation affected the customer:<br>• Specific Cause: (Staff Misinformation / Wrong Product Details / Incorrect Fee Info)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Stamp Duty": {
                "Reason": `•Dispute over government stamp duty deduction.<br>•The customer is disputing the government-mandated stamp duty fee charged to their account.`,
                "Requirements": `• Account Number:<br>• Fee Amount:<br>• Fee Charging Date:<br>• Specific Cause: (Exempt Customer / Calculation Error / Duplicate Duty)`,
                "Template": `CM complaining about Stamp Duty a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fund raising": {
                "Reason": `•Issues related to donation processing or capital raising deduction.<br>•An unauthorized or disputed fund-raising/charity deduction was made from the account.`,
                "Requirements": `• Account Number:<br>• Deduction Amount:<br>• Deduction Date:<br>• Name of Charity/Organization:<br>• Specific Cause: (Unintended Donation / Processing Error / Wrong Organization)`,
                "Template": `CM complaining about Fund raising a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Interest Calculation": {
                "Reason": `•Interest added is less/more than expected based on rate.<br>•The interest credited or debited to the account has been calculated using a wrong rate or principal amount.`,
                "Requirements": `• Account Number:<br>• Statement Period:<br>• Disputed Interest Amount:<br>• Reason for suspecting error:<br>• Credit Date:<br>• Specific Cause: (Arithmetic Error / Wrong Rate Applied / Tier Mismatch)`,
                "Template": `CM complaining about Wrong Interest Calculation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer Policy": {
                "Reason": `•Dissatisfaction with transfer limits, countries, or regulations. (FYI)<br>•The customer is complaining about a bank policy regarding fund transfers (e.g., limits, documentation).(FYI)`,
                "Requirements": `• Account Number:<br>• Specific policy being disputed:<br>• Details of the transaction affected (if any):<br>• Transfer Type:<br>• Specific Cause: (Limit Restriction / Policy Disagreement / Country Block)`,
                "Template": `CM complaining about Transfer Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Safe Box fees": {
                "Reason": `•Dispute over rental fees for safety deposit box.<br>•The customer is disputing the annual rental fees or other charges related to their safe deposit box.`,
                "Requirements": `• Account Number:<br>• Safe Box Number:<br>• Disputed Fee Amount:<br>• Fee Charging Date:<br>• Box No:<br>• Specific Cause: (Fee for Surrendered Box / Overcharge / Auto-Debit Error)`,
                "Template": `CM complaining about Safe Box fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer Fees": {
                "Reason": `•Charges applied to local or swift transfers disputed.<br>•The customer believes the fees charged for a fund transfer were excessive, incorrect, or not disclosed.`,
                "Requirements": `• Account Number:<br>• Transaction Date:<br>• Transfer Amount:<br>• Fee Amount Charged:<br>• Ref No:<br>• Specific Cause: (Promo Waiver Ignored / Correspondent Fee Dispute / Excess Charge)`,
                "Template": `CM complaining about Transfer Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Secrecy": {
                "Reason": `•Customer data disclosed to unauthorized party.<br>•The customer suspects a breach of their account's confidentiality or privacy.`,
                "Requirements": `• Account Number:<br>• Detailed description of the incident:<br>• Date and time of the suspected breach:<br>• Any evidence available:<br>• Incident Date:<br>• Specific Cause: (Data Leak / Unauthorized Disclosure / 3rd Party Access)`,
                "Template": `CM complaining about Account Secrecy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DD Duplicated Deduction": {
                "Reason": `•Direct Debit executed twice for the same billing cycle.<br>•A direct debit payment was deducted from the account more than once in the same billing cycle.`,
                "Requirements": `• Account Number:<br>• Biller Name:<br>• Transaction Amount:<br>• Dates of all deductions:<br>• Specific Cause: (Double Execution / System Retry Error / Biller File Error)`,
                "Template": `CM complaining about DD Duplicated Deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Direct Debit Duplicated Hold": {
                "Reason": `•Amount held for DD while also being deducted (Shadow balance issue).<br>•A hold for a direct debit amount was placed twice on the account, reducing the available balance incorrectly.`,
                "Requirements": `• Account Number:<br>• Biller Name:<br>• Hold Amount:<br>• Date the holds were placed:<br>• Specific Cause: (Hold Not Released Post-Debit / Double Blocking)`,
                "Template": `CM complaining about Direct Debit Duplicated Hold a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Deposit Limit": {
                "Reason": `•Inability to deposit due to ATM or System limits.<br>•The customer is complaining about the daily or per-transaction limit for cash deposits.`,
                "Requirements": `• Account Number:<br>• Channel (ATM/Branch):<br>• Date of attempt:<br>• Amount:<br>• Specific Cause: (Daily Limit Reached / Source of Funds Rejection / System Restriction)`,
                "Template": `CM complaining about Cash Deposit Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "FCY Conversion Difference": {
                "Reason": `•Dispute over exchange rate applied to a transaction.<br>•The customer is disputing the foreign currency exchange rate applied to a transaction or transfer.`,
                "Requirements": `• Account Number:<br>• Transaction Date:<br>• Transaction Amount & Currencies involved:<br>• Disputed exchange rate:<br>• Currency Pair:<br>• Specific Cause: (Rate Mismatch / Spread Dispute / Dynamic Currency Conversion)`,
                "Template": `CM complaining about FCY Conversion Difference a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Activation Policy": {
                "Reason": `•Delay or refusal to activate account due to compliance/policy.(FYI)<br>•The customer is complaining about the difficulty or requirements of the account activation process.(FYI)`,
                "Requirements": `• Account Number:<br>• Specific policy or procedure causing the issue:<br>• Pending Days:<br>• Specific Cause: (KYC Requirements / Internal Policy Block / Doc Deficiency)`,
                "Template": `CM complaining about Account Activation Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Opening Fees": {
                "Reason": `•Charges deducted for opening a new account.<br>•The customer is disputing the fees charged during the process of opening a new account.`,
                "Requirements": `• New Account Number (if available):<br>• Application Reference Number:<br>• Disputed Fee Amount:<br>• Reason for dispute (e.g., not disclosed):<br>• Specific Cause: (Fee Not Disclosed / Promo Waiver Missed / Wrong Tariff)`,
                "Template": `CM complaining about Account Opening Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Opening Policy": {
                "Reason": `•Rejection of account opening or dissatisfaction with requirements.(FYI)<br>•The customer is complaining about the strictness or complexity of the bank's account opening policy.(FYI)`,
                "Requirements": `• Customer Name:<br>• Specific policy or document requirement causing the issue:<br>• Rejection Reason:<br>• Specific Cause: (Eligibility Criteria / Document Rejection / Profile Risk)`,
                "Template": `CM complaining about Account Opening Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Opening Procedures": {
                "Reason": `•Complaints about the process (too many signatures, time taken).<br>•The customer faced significant delays or poor service during the account opening process at a branch.`,
                "Requirements": `• Application Reference Number:<br>• Branch Name:<br>• Date of Application:<br>• Description of the issue:<br>• Specific Cause: (Cumbersome Process / Staff Inefficiency / System Slowness)`,
                "Template": `CM complaining about Account Opening Procedures a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Type Change": {
                "Reason": `•Delay or error in switching account type (e.g. Classic to Gold).<br>•A request to change the account type (e.g., from savings to current) was not processed or was delayed.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Original Account Type:<br>• Requested Account Type:<br>• Old/New Type:<br>• Specific Cause: (Migration Failure / Wrong Features Applied / Delay in Change)`,
                "Template": `CM complaining about Account Type Change a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Balance Certificate Delivery": {
                "Reason": `•Certificate issued but not delivered to customer.<br>•A requested balance certificate was not delivered to the customer's address.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Expected Delivery Address:<br>• SR Number (if available):<br>• Specific Cause: (Courier Failure / Lost in Transit / Wrong Address)`,
                "Template": `CM complaining about Balance Certificate Delivery a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Updating Data Policy": {
                "Reason": `•Issues with KYC update frequency or requirements.(FYI)<br>•The customer is complaining about the difficulty or policy for updating their personal data.(FYI)`,
                "Requirements": `• Account Number:<br>• Data to be updated:<br>• Specific policy or procedure causing the issue:<br>• Ref:<br>• Specific Cause: (Frequent Requests / Rigid Requirements / System Update Failure)`,
                "Template": `CM complaining about Updating Data Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•Incorrect info shown on Mobile/Internet Banking (Dashboard).<br>•Incorrect personal or account data is displayed on bank systems (e.g., Online Banking, Statement).`,
                "Requirements": `• Account Number:<br>• Channel where data is wrong (IB, App, Statement):<br>• Description of incorrect data:<br>• Correct data:<br>• Screenshot (if possible):<br>• Specific Cause: (UI Glitch / Cache Error / Data Sync Failure)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Transaction Type": {
                "Reason": `•Transaction labeled incorrectly (e.g. Purchase appearing as Cash).<br>•A transaction is posted with an incorrect type (e.g., a POS purchase listed as a cash withdrawal).`,
                "Requirements": `• Account Number:<br>• Transaction Date:<br>• Transaction Amount:<br>• Incorrect Type shown:<br>• Correct Transaction Type:<br>• Trans ID:<br>• Specific Cause: (Misclassification / Merchant Code Error / System Label Error)`,
                "Template": `CM complaining about Wrong Transaction Type a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Downgrade Process": {
                "Reason": `•Account downgraded (e.g. VIP to Standard) without notice.<br>•The customer's account package or type was downgraded without clear communication or consent.`,
                "Requirements": `• Account Number:<br>• Original Account Package:<br>• New Account Package:<br>• Date of Downgrade:<br>• Segment:<br>• Specific Cause: (Unnotified Downgrade / Balance Criteria Dispute / System Auto-downgrade)`,
                "Template": `CM complaining about Downgrade Process a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "POA Related": {
                "Reason": `•Power of Attorney rejection or handling issues.<br>•A transaction or request made by a Power of Attorney (POA) holder was rejected or mishandled.`,
                "Requirements": `• Account Number:<br>• POA Holder's Name:<br>• Date of transaction/request:<br>• Description of the issue:<br>• Specific Cause: (POA Rejection / Scope Dispute / Processing Delay)`,
                "Template": `CM complaining about POA Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "RPA-Cheq Book Req. delay": {
                "Reason": `•Automation failure in processing cheque book request.<br>•There is a delay in receiving a cheque book requested via an automated channel (RPA, IVR, Online).`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Channel of Request (IVR, IB, App):<br>• Request Reference Number (if available):<br>• Specific Cause: (Bot Failure / Integration Error / Request Stuck)`,
                "Template": `CM complaining about RPA-Cheq Book Req. delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Deposit Value Date": {
                "Reason": `•Deposit credited with wrong value date affecting interest.<br>•The value date of a cash deposit is incorrect, affecting interest calculation or availability of funds.`,
                "Requirements": `• Account Number:<br>• Date of Deposit:<br>• Deposit Amount:<br>• Incorrect Value Date applied:<br>• Copy of Deposit Slip:<br>• Specific Cause: (Value Date Mismatch / Cut-off Time Dispute / System Lag)`,
                "Template": `CM complaining about Cash Deposit Value Date a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Deposit Fees": {
                "Reason": `•Charges deducted for depositing cash at teller/ATM.<br>•The customer was charged a fee for depositing cash into their own account.`,
                "Requirements": `• Account Number:<br>• Date of Deposit:<br>• Deposit Amount:<br>• Fee Amount Charged:<br>• Specific Cause: (Fee Dispute / Machine Error / Exempt Account Charged)`,
                "Template": `CM complaining about Cash Deposit Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Operational error or poor service by staff regarding the account.<br>•A bank employee was unprofessional, unhelpful, or processed a customer's request incorrectly.`,
                "Requirements": `• Account Number (if applicable):<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Detailed description of the incident:<br>• Specific Cause: (Staff Negligence / Process Violation / Document Loss)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Withdrawal Fees": {
                "Reason": `•Charges for withdrawing cash (Over counter/ATM).<br>•The customer was charged a fee for making an over-the-counter cash withdrawal at a branch.`,
                "Requirements": `• Account Number:<br>• Date of Withdrawal:<br>• Withdrawal Amount:<br>• Fee Amount Charged:<br>• Specific Cause: (ATM Fee Dispute / Counter Fee Dispute / Free Withdrawal Limit)`,
                "Template": `CM complaining about Cash Withdrawal Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Employee unable to answer or help due to training gap.<br>•A bank employee provided incorrect information or was unable to answer questions about a product or procedure.`,
                "Requirements": `• Branch/Department:<br>• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Question asked and incorrect information provided:<br>• Specific Cause: (Staff Incompetence / Wrong Guidance / Training Gap)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Statement Fees": {
                "Reason": `•Charge for receiving electronic statement (should be free usually).<br>•The customer is being charged a fee for receiving electronic statements.`,
                "Requirements": `• Account Number:<br>• Fee Amount:<br>• Fee Charging Date:<br>• Specific Cause: (Wrongful Charge / Service Not Requested / Tariff Error)`,
                "Template": `CM complaining about E-Statement Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Fees deduction": {
                "Reason": `•Generic category for any fee dispute not listed elsewhere.<br>•A fee that the customer is not liable for has been deducted from the account.`,
                "Requirements": `• Account Number:<br>• Fee Amount:<br>• Fee Charging Date:<br>• Name of the Fee from Statement:<br>• Reason for dispute:<br>• Specific Cause: (System Glitch / Manual Error / Unknown Charge)`,
                "Template": `CM complaining about Wrong Fees deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Cheque book Fees": {
                "Reason": `•Overcharge for cheque book issuance.<br>•The fee charged for a new cheque book is incorrect or higher than advised.`,
                "Requirements": `• Account Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Specific Cause: (Price Discrepancy / Exempt Customer Charged / Wrong Book Type Fee)`,
                "Template": `CM complaining about Wrong Cheque book Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong AC Opening Fees": {
                "Reason": `•Incorrect amount charged for account opening.<br>•The fee charged for opening the account was incorrect or not disclosed beforehand.`,
                "Requirements": `• Account Number:<br>• Fee Amount Charged:<br>• Specific Cause: (Tariff Error / Promo Waiver Missed / Double Charge)`,
                "Template": `CM complaining about Wrong AC Opening Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Clearance Fees": {
                "Reason": `•Fees for clearing a cheque are incorrect.<br>•An incorrect fee was charged for a clearance letter or process.`,
                "Requirements": `• Account Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Cheque No:<br>• Specific Cause: (High Charge / Exempt Item / Double Deduction)`,
                "Template": `CM complaining about Wrong Clearance Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Withdrawal Transaction": {
                "Reason": `•Customer disputes a withdrawal they claim they didn't make.<br>•A withdrawal transaction appears on the statement that was not made or authorized by the customer.`,
                "Requirements": `• Account Number:<br>• Transaction Date:<br>• Transaction Amount:<br>• Channel (ATM/Branch):<br>• Confirmation transaction is unauthorized:<br>• Trans ID:<br>• Specific Cause: (Fraud Claim / System Error / Unauthorized Access)`,
                "Template": `CM complaining about Wrong Withdrawal Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Balance Certificate Fees": {
                "Reason": `•Incorrect charge for issuing a balance certificate.<br>•The fee charged for a balance certificate is incorrect or was not disclosed.`,
                "Requirements": `• Account Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Specific Cause: (Tariff Mismatch / Multi-Copy Charge Error / Exempt Account)`,
                "Template": `CM complaining about Wrong Balance Certificate Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong DC Fees": {
                "Reason": `•Incorrect Debit Card annual or issuance fees deducted from account.<br>•An incorrect fee related to a Debit Card has been charged to the account.`,
                "Requirements": `• Account Number:<br>• Masked Debit Card Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Name of the Fee:<br>• Specific Cause: (Annual Fee Dispute / Replacement Fee Error / Renewal Fee Error)`,
                "Template": `CM complaining about Wrong DC Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Treasury Bills": {
                "Reason": `•Issues with booking, redemption, or yield of T-Bills.<br>•The customer has an issue with their Treasury Bills investment (e.g., wrong maturity amount, delay in proceeds).`,
                "Requirements": `• Account Number:<br>• T-Bill Issuance Number:<br>• Maturity Date:<br>• Description of the issue:<br>• Specific Cause: (Booking Failure / Yield Discrepancy / Redemption Delay)`,
                "Template": `CM complaining about Treasury Bills a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong AC Opened": {
                "Reason": `•Bank opened Savings instead of Current (or vice versa).<br>•A different type of account was opened than what the customer requested and signed up for.`,
                "Requirements": `• Account Number:<br>• Application Reference Number:<br>• Requested Account Type:<br>• Opened Account Type:<br>• Specific Cause: (Officer Error / System Default Error / Miscommunication)`,
                "Template": `CM complaining about Wrong AC Opened a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Salary/Pension Related": {
                "Reason": `•Delay or failure in crediting monthly salary/pension.<br>•The customer's monthly salary or pension has not been credited to their account on the expected date.`,
                "Requirements": `• Account Number:<br>• Expected Credit Date:<br>• Expected Amount:<br>• Employer/Pension Authority Name:<br>• Specific Cause: (File Upload Delay / System Rejection / Incorrect Account Details)`,
                "Template": `CM complaining about Salary/Pension Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Statement Delivery": {
                "Reason": `•Statement sent to wrong email or physical address.<br>•The bank statement was delivered to a wrong or old address despite the customer updating their records.`,
                "Requirements": `• Account Number:<br>• Statement Month:<br>• Correct Address on Record:<br>• Address it was sent to (if known):<br>• Wrong Address:<br>• Specific Cause: (Database Error / Input Error / Old Address Used)`,
                "Template": `CM complaining about Wrong Statement Delivery a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Signature not added": {
                "Reason": `•Customer signature not uploaded to system (Fails verification).<br>•The customer's updated signature is not reflecting in the system, causing transactions to be rejected.`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Details of the transaction rejected:<br>• Account Opened Date:<br>• Specific Cause: (Scanning Failure / Branch Oversight / System Sync Error)`,
                "Template": `CM complaining about Signature not added a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cheque book Fees": {
                "Reason": `•General dispute about the cost of cheque books.<br>•The customer is disputing the standard fee for a cheque book.`,
                "Requirements": `• Account Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Specific Cause: (High Cost Complaint / Fee Applied to Free Account / Duplicate Fee)`,
                "Template": `CM complaining about Cheque book Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hold Not Released": {
                "Reason": `•Lien or hold remains after obligation is settled.<br>•A hold placed on the account's funds has not been released after the specified period.`,
                "Requirements": `• Account Number:<br>• Hold Amount:<br>• Reason for Hold (if known):<br>• Expected Release Date:<br>• Hold Ref:<br>• Specific Cause: (Manual Release Failure / System Sync Issue / Expired Lien)`,
                "Template": `CM complaining about Hold Not Released a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Payroll AC Feature": {
                "Reason": `•Missing benefits associated with Payroll accounts (e.g. no fees).<br>•A promised feature or benefit for a payroll account is not being provided.`,
                "Requirements": `• Account Number:<br>• Name of missing feature/benefit:<br>• Where/when this feature was promised:<br>• Specific Cause: (Scheme Configuration Error / Feature Not Activated / Wrong Scheme)`,
                "Template": `CM complaining about Payroll AC Feature a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Statement Notification": {
                "Reason": `•Email/SMS notification for E-statement availability not received.<br>•The customer is not receiving email notifications when their e-statement is ready to be viewed.`,
                "Requirements": `• Account Number:<br>• Registered Email Address:<br>• Month:<br>• Specific Cause: (Notification Failure / Bounced Email / System Error)`,
                "Template": `CM complaining about E-Statement Notification a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Mob Number": {
                "Reason": `•Mobile number not linked, preventing OTP/SMS services.<br>•The customer's mobile number is missing from the bank's records, preventing them from receiving OTPs and alerts.`,
                "Requirements": `• Account Number:<br>• Customer Full Name:<br>• Correct Mobile Number to be added:<br>• Specific Cause: (Data Entry Omission / System Deletion / Migration Error)`,
                "Template": `CM complaining about Missing Mob Number a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Closure Policy": {
                "Reason": `•Complaint about strictness or fees related to closing account.(FYI)<br>•The customer is complaining about the bank's policy for account closure (e.g., requirement to visit branch).(FYI)`,
                "Requirements": `• Account Number:<br>• Specific policy being disputed:<br>• Closure Fee:<br>• Specific Cause: (Early Closure Fee / Policy Disagreement / Refund Delay)`,
                "Template": `CM complaining about Account Closure Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Closure Procedures": {
                "Reason": `•Complaint about the steps required to close (e.g. visiting branch).<br>•The customer faced significant issues, delays, or unhelpful service while trying to close their account.`,
                "Requirements": `• Account Number:<br>• Date of Closure Request:<br>• Branch Name:<br>• Description of the issue faced:<br>• Specific Cause: (Bureaucracy / Long Wait / Lost Request)`,
                "Template": `CM complaining about Account Closure Procedures a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hold Release Delay": {
                "Reason": `•Hold released but took longer than SLA to reflect in available balance.<br>•There is a delay in releasing a hold on the customer's funds.`,
                "Requirements": `• Account Number:<br>• Hold Amount:<br>• Reason for Hold (if known):<br>• Expected Release Date:<br>• Release Date:<br>• Specific Cause: (SLA Breach / Manual Processing Delay / Batch Delay)`,
                "Template": `CM complaining about Hold Release Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "IBAN Code Display": {
                "Reason": `•IBAN not showing or showing incorrectly on statement/app.<br>•The IBAN code is displayed incorrectly or is missing on digital channels.`,
                "Requirements": `• Account Number:<br>• Channel (IB, App, Statement):<br>• Screenshot of the issue (if possible):<br>• Channel:<br>• Specific Cause: (Generation Failure / Display Error / Check Digit Error)`,
                "Template": `CM complaining about IBAN Code Display a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account over drawn": {
                "Reason": `•Account went into negative balance unexpectedly (Technical OD).<br>•The account has been overdrawn, and the customer is disputing the transaction or associated fees.`,
                "Requirements": `• Account Number:<br>• Transaction that caused the overdraft:<br>• Date of overdraft:<br>• Reason for dispute:<br>• OD Amount:<br>• Specific Cause: (Offline Transaction / Bank Charges / Interest Debit)`,
                "Template": `CM complaining about Account over drawn a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Change Account type Delay": {
                "Reason": `•Request to upgrade/change account type is pending too long.<br>•There is a delay in processing a request to change the account type.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Original Account Type:<br>• Requested Account Type:<br>• Specific Cause: (Workflow Stuck / Approval Delay / System Error)`,
                "Template": `CM complaining about Change Account type Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit Interest": {
                "Reason": `•Interest charged on the account (usually for Overdraft).<br>•The customer is disputing the debit interest charged on their overdrawn account.`,
                "Requirements": `• Account Number:<br>• Statement Period:<br>• Disputed Interest Amount:<br>• Specific Cause: (Unarranged OD / High Rate / Calculation Error)`,
                "Template": `CM complaining about Debit Interest a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Statement": {
                "Reason": `•General issues with viewing or downloading E-statement.<br>•The customer is facing a technical issue with their e-statement (e.g., password not working, corrupted file).`,
                "Requirements": `• Account Number:<br>• Statement Month:<br>• Description of the technical issue:<br>• Specific Cause: (File Corrupted / Link Expired / Login Issue)`,
                "Template": `CM complaining about E-Statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fawry- Incomplete transaction": {
                "Reason": `•Payment made via Fawry but not credited/debited correctly.<br>•A transaction via a Fawry service failed, but the account was debited and the amount was not refunded.`,
                "Requirements": `• Account Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Fawry Service / Biller Name:<br>• Transaction Reference Number:<br>• Specific Cause: (Provider Timeout / Money Lost / Status Mismatch)`,
                "Template": `CM complaining about Fawry- Incomplete transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Premium Saver Account": {
                "Reason": `•Specific issues with this product (Interest/Fees).<br>•The customer has a specific issue related to their Premium Saver Account (e.g., interest rate applied is wrong).`,
                "Requirements": `• Account Number:<br>• Description of the issue:<br>• Statement Period (if applicable):<br>• Issue:<br>• Specific Cause: (Product Rules Dispute / Interest Tier Error / Fee Waiver Failure)`,
                "Template": `CM complaining about Premium Saver Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Trans. Sett. Delay": {
                "Reason": `•Transaction pending settlement for too long.<br>•There is a delay in the settlement or reversal of an incomplete transaction (e.g., failed POS purchase).`,
                "Requirements": `• Account Number:<br>• Original Transaction Date:<br>• Original Transaction Amount:<br>• Merchant Name:<br>• Specific Cause: (Merchant Settlement Delay / System Hang / Suspense Account Issue)`,
                "Template": `CM complaining about Incomplete Trans. Sett. Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Not available": {
                "Reason": `•Branch or ATM ran out of cash.<br>•The customer went to a branch/ATM and cash was not available for withdrawal.`,
                "Requirements": `• Branch/ATM Location:<br>• Date and Time of Visit:<br>• Location:<br>• Specific Cause: (Liquidity Shortage / Denomination Unavailability / Vault Locked)`,
                "Template": `CM complaining about Cash Not available a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Consolidated Fees": {
                "Reason": `•Lump sum fee charged, customer wants breakdown.<br>•The customer is disputing the consolidated fees charged based on their total relationship with the bank.`,
                "Requirements": `• Account Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Specific Cause: (Lack of Transparency / High Amount / Billing Error)`,
                "Template": `CM complaining about Consolidated Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Service flag not executed": {
                "Reason": `•Customer signed up for E-services but flag not active on system.<br>•A request to activate or deactivate an e-service (e.g., e-statement) was not processed.`,
                "Requirements": `• Account Number:<br>• Service to be activated/deactivated:<br>• Date of Request:<br>• Specific Cause: (Activation Failure / Data Sync Error / Flag Missing)`,
                "Template": `CM complaining about E-Service flag not executed a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products terms & conditions.": {
                "Reason": `•Customer disputes hidden or unclear T&Cs.(FYI)<br>•The customer is complaining that the product's T&Cs are unclear, unfair, or were not properly explained.(FYI)`,
                "Requirements": `• Product Name:<br>• Specific Term/Condition being disputed:<br>• How it was not explained clearly:<br>• Specific Cause: (Unclear Clauses / Unsigned Contract / Policy Dispute)`,
                "Template": `CM complaining about Products terms & conditions. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispensed Transaction": {
                "Reason": `•ATM dispensed cash but did not debit (or partial dispense).<br>•An ATM transaction where cash was not dispensed, but the account was debited.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Amount:<br>• Missing Amount:<br>• Customer Mobile Number:<br>• CP#:<br>• Specific Cause: (Hardware Error / Partial Dispense / Reconciliation Issue)`,
                "Template": `CM complaining about Dispensed Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Refund Action": {
                "Reason": `•Refund credited incorrectly (amount or account).<br>•A refund was credited with the wrong amount, to the wrong account, or has been reversed in error.`,
                "Requirements": `• Account Number:<br>• Expected Refund Amount:<br>• Original Transaction Details:<br>• Date refund was received/reversed:<br>• Specific Cause: (Wrong Account Credited / Partial Refund / Duplicate Refund)`,
                "Template": `CM complaining about Wrong Refund Action a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Reactivation Delay": {
                "Reason": `•Delay in reactivating a dormant/frozen account.<br>•There is a delay in reactivating a dormant or frozen account after the customer submitted the required documents.`,
                "Requirements": `• Account Number:<br>• Date of Reactivation Request:<br>• Branch where documents were submitted:<br>• Specific Cause: (Approval Delay / System Latency / Document Review)`,
                "Template": `CM complaining about Account Reactivation Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Withdrawal Policy": {
                "Reason": `•Complaint about limits or rules for withdrawal.(FYI)<br>•The customer is complaining about the bank's policy for cash withdrawals (e.g., daily limits, need for prior notice).(FYI)`,
                "Requirements": `• Specific policy being disputed:<br>• Date and Branch of incident (if any):<br>• Limit:<br>• Specific Cause: (Daily Limit Complaint / Large Cash Request Denied / ID Requirement)`,
                "Template": `CM complaining about Cash Withdrawal Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Deposit Error": {
                "Reason": `•ATM or Teller deposit credited incorrectly (Amount/Account).<br>•A deposit was credited with an incorrect amount or to the wrong account by the bank.`,
                "Requirements": `• Account Number:<br>• Date of Deposit:<br>• Correct Deposit Amount:<br>• Amount actually credited:<br>• Copy of Deposit Slip:<br>• Specific Cause: (Counting Error / Keying Error / Machine Jam)`,
                "Template": `CM complaining about Deposit Error a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Referral Removal Delay": {
                "Reason": `•Staff referral flag not removed, causing delays.<br>•There is a delay in removing a referral code or flag from an account after the customer requested it.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Staff Name:<br>• Specific Cause: (Internal Process Delay / Flag Stuck / Officer Inaction)`,
                "Template": `CM complaining about Referral Removal Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete TAT": {
                "Reason": `•Service request exceeded Turn Around Time without resolution.<br>•The Turnaround Time (TAT) for a service request was not met by the bank.`,
                "Requirements": `• Service Request (SR) Number:<br>• Date of Request:<br>• Promised TAT:<br>• Type of Request:<br>• Specific Cause: (SLA Breach / Pending Approval / Lost Request)`,
                "Template": `CM complaining about Incomplete TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cheque book request rejection": {
                "Reason": `•Bank refused to issue cheque book (Score/History).<br>•A request for a new cheque book was rejected without a clear reason.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Reason for rejection (if known):<br>• Specific Cause: (Low Credit Score / IScore Issue / Bad History / Policy Decline)`,
                "Template": `CM complaining about Cheque book request rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card less Deposit With OTP": {
                "Reason": `•Issue with depositing cash without card using OTP.<br>•The customer is experiencing an issue with a cardless deposit transaction that requires an OTP.`,
                "Requirements": `• Target Account Number:<br>• Sender's Mobile Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Description of the issue (e.g., OTP not received):<br>• Mobile No:<br>• Specific Cause: (OTP Not Received / OTP Expired / System Reject)`,
                "Template": `CM complaining about Card less Deposit With OTP a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Deposit": {
                "Reason": `•General dispute regarding a cash deposit transaction.<br>•Customer complains of an incomplete cash deposit at a CIB ATM.`,
                "Requirements": `• Account Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Amount:<br>• Currency:<br>• Missing Amount:<br>• Customer Mobile Number:<br>• CP#:<br>• Specific Cause: (Money Not Credited / Counterfeit Note Dispute / Receipt Mismatch)`,
                "Template": `CM complaining about Cash Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Statement Balance": {
                "Reason": `•Calculation error in the running balance of the statement.<br>•The balance shown on the account statement is incorrect and does not reconcile with the customer's records.`,
                "Requirements": `• Account Number:<br>• Statement Date:<br>• Disputed Balance:<br>• List of transactions causing the discrepancy (if known):<br>• Specific Cause: (Arithmetic Error / Opening Balance Mismatch / Posting Delay)`,
                "Template": `CM complaining about Wrong Statement Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card less Deposit": {
                "Reason": `•Issues with cardless deposit (Wallet/NFC).<br>•Customer is experiencing an issue with a cardless deposit at an ATM (e.g., machine took cash but didn't credit account).`,
                "Requirements": `• Target Account Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Amount Deposited:<br>• Customer Mobile Number:<br>• Channel:<br>• Specific Cause: (Transaction Failed / Money Eaten / Network Error)`,
                "Template": `CM complaining about Card less Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Stop Salary Certificate": {
                "Reason": `•Bank stopped issuing salary certificates to customer.<br>•A request for a "Stop Salary Certificate" has been delayed or not processed.`,
                "Requirements": `• Account Number:<br>• Date of Request:<br>• Branch Name:<br>• Reason:<br>• Specific Cause: (Internal Policy / Loan Default / Employer Blacklist)`,
                "Template": `CM complaining about Stop Salary Certificate a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Teller Wrong Deposit": {
                "Reason": `•Teller deposited to wrong account or wrong amount.<br>•A teller processed a deposit with an error (e.g., credited wrong amount, credited wrong account).`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Date & Time of Transaction:<br>• Teller ID/Stamp (from receipt):<br>• Deposit Amount:<br>• Copy of Deposit Slip:<br>• Specific Cause: (Typo in Account No / Counting Error / Slip Mismatch)`,
                "Template": `CM complaining about Teller Wrong Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Teller Wrong Withdrawal": {
                "Reason": `•Teller debited wrong account or wrong amount.<br>•A teller processed a withdrawal incorrectly (gave wrong amount of cash, debited wrong amount).`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Date & Time of Transaction:<br>• Teller ID/Stamp (from receipt):<br>• Withdrawal Amount:<br>• Amount of discrepancy:<br>• Specific Cause: (Typo in Account No / Wrong Amount Keyed / Auth Error)`,
                "Template": `CM complaining about Teller Wrong Withdrawal a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Trans Refund delay": {
                "Reason": `•Approved refund for a dispute is delayed.<br>•There is a delay in receiving a refund for a disputed transaction after the case was closed in their favor.`,
                "Requirements": `• Account Number:<br>• Original Dispute Reference Number:<br>• Original Transaction Amount:<br>• Date case was closed/refund was promised:<br>• Dispute Date:<br>• Specific Cause: (Processing Lag / Settlement Delay / Manual Credit Pending)`,
                "Template": `CM complaining about Dispute Trans Refund delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Dispute": {
                "Reason": `•Dispute closed without resolution or full investigation.<br>•Customer made Withdrawal on ATM CIB but didn't receive any amount from ATM and amount deducted from account`,
                "Requirements": `· Account/Credit Card Account Number/Smart wallet mobile:<br> · Masked credit card:<br> · Machine Number:<br> · Date:<br> · Time:<br> · Amount:<br> · Currency:<br> · Missing Amount:<br> · Bank Note Category:<br> · Customer Mobile Number: <br>· CP# :`,
                "Template": `CM complaining about Incomplete Dispute a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Cash Deposit": {
                "Reason": `•Cash deposit transaction interrupted (Money in, no credit).<br>•Customer made Deposit on ATM CIB but didn't reflect on account`,
                "Requirements": `· Account/Credit Card Account Number/Smart wallet mobile:<br> · Masked credit card: <br>· Machine Number:<br> · Date:<br> · Time:<br> · Amount:<br> · Currency: <br>· Missing Amount:<br> · Bank Note Category:<br> · Customer Mobile Number:<br> · CP# :`,
                "Template": `CM complaining about Incomplete Cash Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "statement delivery Delay": {
                "Reason": `•Physical statement arrived late.<br>•There is a delay in the delivery of the physical Accounts statement.`,
                "Requirements": `ccount #<br>Reprint request# :<br>Reprint request Date:<br>Mailing Address#( if the address unclearassign change mailing address if the customer eligible )<br>Last printing Date :<br>Calling Party:<br>• Specific Cause: (Courier Delay / Postal Delay / Printing Delay)`,
                "Template": `CM complaining about statement delivery Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer delay": {
                "Reason": `•Outgoing or incoming transfer took too long.`,
                "Requirements": `Account Number:<br>Beneficiary Name :<br>Beneficiary Bank :<br>Beneficiary Account :<br>Amount :<br>Date Of transaction :<br>Channel of transfer :""<br>Copy From Transaction : <br>• Specific Cause: (SWIFT Delay / Screening Hold / Correspondent Bank Delay)`,
                "Template": `CM complaining about Transfer delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Minimum balance fees": {
                "Reason": `•Fee charged for balance dropping below threshold.`,
                "Requirements": `Mobile:<br>Account:<br>Calling Party:<br>Date Of Opening the ACC :<br>Fees Amount :<br>Copy of FEES : <br>• Specific Cause: (Exempt Account / Balance Above Limit / Fee Error)`,
                "Template": `CM complaining about Minimum balance fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Balance Mis-Match": {
                "Reason": `•Difference between Ledger Balance and Available Balance.`,
                "Requirements": `Account:<br>Ledger balance<br>Net balance<br>Calling Party:<br>• Specific Cause: (Uncleared Effects / Shadow Holds / System Sync Error)`,
                "Template": `CM complaining about Balance Mis-Match a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cheque collection delay": {
                "Reason": `•Cheque deposited took too long to clear.`,
                "Requirements": `Account:<br>Check amount :<br>Request Channel:<br>Request Date:<br>Calling Party:<br>• Cheque No:<br>• Specific Cause: (Clearing House Delay / Courier Delay / Lost Cheque)`,
                "Template": `CM complaining about Cheque collection delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customers Data Update": {
                "Reason": `•Delay or error in updating customer profile (Address/ID).`,
                "Requirements": `Account #<br>New Data #<br>Request date #<br>Request channel #<br>Calling Party #<br>• Specific Cause: (System Failure / Staff Oversight / Doc Rejection)`,
                "Template": `CM complaining about Customers Data Update a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Referral": {
                "Reason": `•Account placed under referral (Hold) requiring officer approval.`,
                "Requirements": `Account:<br>Request date:<br>Request channel<br>Calling Party:<br>• Specific Cause: (KYC Refresh Needed / High Risk Flag / Unusual Activity)`,
                "Template": `CM complaining about Account Referral a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Duplicated Transaction": {
                "Reason": `•Same transaction posted twice.`,
                "Requirements": `Account #<br>Transaction date #<br>Authorization Code #<br>Transaction amount #<br>Calling Party #<br>• Ref 1 & 2:<br>• Specific Cause: (System Retry Error / Vendor Double Charge / Batch Duplication)`,
                "Template": `CM complaining about Duplicated Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Alert Service": {
                "Reason": `•SMS/Email alerts not working or charged incorrectly.`,
                "Requirements": `Account:<br>Mobile :<br>Calling Party:<br>• Specific Cause: (Service Down / Subscription Error / Wrong Language)`,
                "Template": `CM complaining about Alert Service a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Data Entry": {
                "Reason": `•Typo or error in customer data input by staff.`,
                "Requirements": `Account:<br>Wrong data :<br>Correct data:<br>Branch<br>Calling Party:<br>• Specific Cause: (Spelling Error / Wrong DOB / Wrong ID No)`,
                "Template": `CM complaining about Wrong Data Entry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Salary/Pension Transfer delay": {
                "Reason": `•Monthly income credit delayed.`,
                "Requirements": `Account:<br>Company:<br>Calling Party # <br>• Month:<br>• Specific Cause: (Employer File Delay / Bank Processing Delay / System file Error)`,
                "Template": `CM complaining about Salary/Pension Transfer delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SMS Not Sent": {
                "Reason": `•No SMS received for transaction.`,
                "Requirements": `ACC :<br>Date Of Last Salary :<br>Copy From the Salary : <br>• Trans Date:<br>• Specific Cause: (Gateway Failure / Network Issue / DND Activated)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Coding Related Issues": {
                "Reason": `•General system parameter/coding errors on account.`,
                "Requirements": `Account :<br>Calling party :<br>Copy of charges : <br>• Specific Cause: (Wrong Product Code / Incorrect Interest Flag / Tax Code Error)`,
                "Template": `CM complaining about Coding Related Issues a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account opening delay": {
                "Reason": `•New account opening exceeded TAT.`,
                "Requirements": `Request channel (branch) #<br>Type of account # Individual\ Payroll account<br>Company name #<br>ID #<br>Date #<br>Calling Party #<br>• Specific Cause: (Compliance Hold / Missing Docs / Staff Backlog)`,
                "Template": `CM complaining about Account opening delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cheque book request delay": {
                "Reason": `•Requested cheque book not delivered on time.`,
                "Requirements": `Account #<br>Request Channel #<br>Request Date #<br>Calling Party #<br><br>• Specific Cause: (Printing Delay / Courier Delay / Order Lost)`,
                "Template": `CM complaining about Cheque book request delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Closure Delay": {
                "Reason": `•Account closure request pending beyond SLA.`,
                "Requirements": `Account #<br>Branch Location #<br>Date #<br><br>• Specific Cause: (System Error / Pending Charges / Staff Inaction)`,
                "Template": `CM complaining about Account Closure Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Statements Not-uploaded": {
                "Reason": `•E-Statement not appearing on portal.<br>•Online statement for a specific month is not available on Internet Banking or the mobile app.`,
                "Requirements": `• Account Number:<br>• Statement Month & Year:<br>• Channel (Internet Banking/Mobile App):<br>• Screenshot of the issue (if possible):<br>• Specific Cause: (Upload Batch Fail / Profile Link Error / Technical Glitch)`,
                "Template": `CM complaining about Statements Not-uploaded a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Address Change System Behavior": {
                "Reason": `•Address updated but system reverts or shows old one.<br>•An attempt to change the address via a digital channel failed, or the change is not reflected correctly.`,
                "Requirements": `• Account Number:<br>• Channel used for update (IB, App, Branch):<br>• Date of Request:<br>• Correct Address:<br>• New Address:<br>• Specific Cause: (Database overwrite / Sync Failure / Bug)`,
                "Template": `CM complaining about Address Change System Behavior a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong SMS": {
                "Reason": `•SMS content incorrect (Wrong amount/balance/merchant).<br>•The customer received an incorrect SMS notification (e.g., wrong balance, transaction not theirs).`,
                "Requirements": `• Account Number:<br>• Customer Mobile Number:<br>• Full text of the incorrect SMS:<br>• Date & Time SMS was received:<br>• Specific Cause: (Template Error / Data Mapping Error / Wrong variable)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Captured Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Custody Fees": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Decoding Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SI Cancellation delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SI fees": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Audit Confirmation Complaints": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SI Implementation delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Batch": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "RPA-Cheq Book wrong decision": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Account overdrawn Settlement": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Missing Captured Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Data Authorization delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Dynamic Currency Conversion": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Account Misuse": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong EMI Deduction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CPS Transaction Reflection": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Payroll Interest Adjustment": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CBE Related Mandates": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Industry Code Change Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Inheritance Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Products design": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Super Business Subsc Fees": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Unsuccessful Withdrawal": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Unsuccessful Deposit": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "GTS Monthly Fees": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Cheque Book Delivery": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Master Card Authorization": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Master Card Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Acquirer Duplication": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong GTS Fees deduction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Courier Attitude": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },

        "Over Draft": {
            "Over draft booking delay": {
                "Reason": `•The facility has been approved but the limit is not yet active on the core system.<br>•There is a delay in the booking or activation of an approved overdraft facility.`,
                "Requirements": `• Application Reference Number:<br>• Date of Approval:<br>• Customer Name:<br>• Specific Cause: (System Latency / Manual Booking Pending / Workflow Stuck)`,
                "Template": `CM complaining about Over draft booking delay on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Misleading Information": {
                "Reason": `•Customer received incorrect details regarding OD fees, interest rates, or repayment terms.<br>•The customer claims they were given misleading information about the overdraft's interest rate, fees, or terms.`,
                "Requirements": `• Details of information provided:<br>• Date & Location of interaction (Branch/Call):<br>• How the misinformation affected the customer:<br>• Staff Name/Branch:<br>• Specific Cause: (Wrong Interest Rate Info / Hidden Fees / Incorrect Repayment Terms)`,
                "Template": `CM complaining about Misleading Information on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Overdraft application delay": {
                "Reason": `•The Turn Around Time (TAT) for processing the OD application has been exceeded.<br>•There is a delay in processing a new application for an overdraft facility.`,
                "Requirements": `• Application Reference Number:<br>• Date of Application:<br>• Customer Name:<br>• Specific Cause: (Underwriting Delay / Missing Documents / Lost Application)`,
                "Template": `CM complaining about Overdraft application delay on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit Interest": {
                "Reason": `•Dispute regarding the interest amount charged on the utilized overdraft portion.<br>•The customer is disputing the debit interest charged on their overdraft facility.`,
                "Requirements": `• Account Number:<br>• Statement Period:<br>• Disputed Interest Amount:<br>• Charge Amount:<br>• Rate Applied:<br>• Specific Cause: (Calculation Error / Rate Mismatch / Days Count Error)`,
                "Template": `CM complaining about Debit Interest on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Overdraft limit Not-updated": {
                "Reason": `•The approved increase or decrease in the OD limit is not reflecting on the account.<br>•An approved change in the overdraft limit has not been updated on the account.`,
                "Requirements": `• Account Number:<br>• Approved Limit:<br>• Date of Approval:<br>• Current incorrect limit shown:<br>• New Limit:<br>• Specific Cause: (System Sync Failure / Batch Error / Update Pending)`,
                "Template": `CM complaining about Overdraft limit Not-updated on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Collection Deduction": {
                "Reason": `•Funds automatically deducted from the account to cover OD arrears or fees.<br>•An incorrect amount was deducted from the account for overdraft collection purposes.`,
                "Requirements": `• Account Number:<br>• Deduction Amount:<br>• Deduction Date:<br>• Reason for dispute:<br>• Specific Cause: (Offset Error / Exempt Funds Deducted / Unjustified Debit)`,
                "Template": `CM complaining about Collection Deduction on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "External Agency Communication": {
                "Reason": `•Complaints regarding harassment or privacy breaches by third-party debt collectors.<br>•The customer is complaining about unprofessional or harassing communication from an external collection agency.`,
                "Requirements": `• Agency Name:<br>• Agent Name:<br>• Date & Time of Communication:<br>• Details of the incident/complaint:<br>• Specific Cause: (Harassment / Privacy Breach / Contacting Workplace / Rude Behavior)`,
                "Template": `CM complaining about External Agency Communication on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Operational errors by staff in managing the OD facility or related requests.<br>•The customer feels their overdraft account or a related request was handled improperly by bank staff.`,
                "Requirements": `• Account Number:<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Detailed description of the incident:<br>• Incident Details:<br>• Specific Cause: (Process Violation / Staff Negligence / Documentation Error)`,
                "Template": `CM complaining about Mishandling on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Bank staff unable to explain OD features or resolve simple inquiries.<br>•A bank employee provided incorrect information about overdraft products or procedures.`,
                "Requirements": `• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Question asked and incorrect information provided:<br>• Branch/Channel:<br>• Specific Cause: (Training Gap / Wrong Advice / Inability to Assist)`,
                "Template": `CM complaining about Lack Of Knowledge on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•OD limit or utilization showing incorrectly on Digital Channels (App/Web).<br>•Incorrect overdraft data is displayed on digital channels (e.g., wrong outstanding balance, incorrect limit).`,
                "Requirements": `• Account Number:<br>• Channel (IB, App):<br>• Description of incorrect data:<br>• Screenshot (if possible):<br>• Specific Cause: (UI Glitch / Cache Error / Data Sync Failure)`,
                "Template": `CM complaining about Wrong Displayed Data on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Overdraft application Req Rej": {
                "Reason": `•Rejection of the OD facility request based on credit policy or score.<br>•An application for an overdraft facility was rejected, and the customer wants to know the reason.`,
                "Requirements": `• Application Reference Number:<br>• Date of Application:<br>• Rejection Reason:<br>• Specific Cause: (Credit Score / High DBR / Policy Decline / Internal List)`,
                "Template": `CM complaining about Overdraft application Req Rej on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Clearance Issuance Policy": {
                "Reason": `•Dissatisfaction with the requirements or fees to obtain a clearance letter.(FYI)<br>•The customer is complaining about the policy for issuing a clearance letter for an overdraft (e.g., fees, TAT).(FYI)`,
                "Requirements": `• Account Number:<br>• Specific policy being disputed:<br>• Request Date:<br>• Specific Cause: (Fee Dispute / Waiting Period Complaint / Document Requirement)`,
                "Template": `CM complaining about Clearance Issuance Policy on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Overdraft Settlement Delay": {
                "Reason": `•Payment made to clear the OD but the facility status remains active/open.<br>•There is a delay in processing the final settlement and closure of an overdraft facility.`,
                "Requirements": `• Account Number:<br>• Amount Paid for Settlement:<br>• Payment Date:<br>• Specific Cause: (Allocation Delay / System Batch Error / Manual Settlement Pending)`,
                "Template": `CM complaining about Overdraft Settlement Delay on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products terms & conditions": {
                "Reason": `•Customer disputes the contractual terms (e.g. penalty clauses, variable rates).(FYI)<br>•The customer is complaining that the overdraft's T&Cs are unclear or were not properly explained.(FYI)`,
                "Requirements": `• Product Name (Overdraft):<br>• Specific Term/Condition being disputed:<br>• How it was not explained clearly:<br>• Clause:<br>• Specific Cause: (Unfair Terms / Hidden Clauses / Ambiguous Wording)`,
                "Template": `CM complaining about Products terms & conditions on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Miss-Selling": {
                "Reason": `•OD facility activated without consent or sold under false pretenses.<br>•The customer feels the overdraft product was sold to them based on misleading information about its benefits or costs.`,
                "Requirements": `• Details of the sales pitch:<br>• Name of Sales Staff (if known):<br>• Date of booking:<br>• How the product differs from what was promised:<br>• Sales Channel:<br>• Specific Cause: (Forced Sale / Misrepresentation / Unconsented Activation)`,
                "Template": `CM complaining about Miss-Selling on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Clearance letter Delay": {
                "Reason": `•Facility settled but the physical clearance letter is delayed beyond SLA.<br>•There is a delay in the issuance or delivery of a clearance letter for a settled overdraft.`,
                "Requirements": `• Account Number:<br>• Date of Overdraft Settlement:<br>• Date of Clearance Letter Request:<br>• Specific Cause: (Signature Delay / Printing Issue / Courier Delay)`,
                "Template": `CM complaining about Clearance letter Delay on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "AFU Investigation Complaint": {
                "Reason": `•Complaint regarding an ongoing Audit/Fraud Unit investigation on the OD account.<br>•The customer has a complaint related to an investigation conducted by the Anti-Fraud Unit (AFU) on their overdraft.`,
                "Requirements": `• AFU Case Reference Number (if known):<br>• Account Number:<br>• Detailed description of the complaint against the investigation:<br>• Case Ref:<br>• Specific Cause: (Long Investigation Time / Account Freeze / Lack of Updates)`,
                "Template": `CM complaining about AFU Investigation Complaint on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Collection Communication": {
                "Reason": `•Complaints about the frequency, timing, or tone of internal bank collection calls.`,
                "Requirements": `• the incident that reflect the staff attitude :#<br>• Incident Date:#<br>• Calling Party:#<br>• Collection calling party#<br>• Specific Cause: (Excessive Calling / Rude Behavior / Calling Wrong Person / Late Night Calls)`,
                "Template": `CM complaining about Collection Communication on his/her account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CBE Related Mandates": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to CBE NL": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to I-Score": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Facility Request Status": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score - Updating Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score Related Issues": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Products design": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Alternative Channels": {
        "Online Banking": {
            "Lack Of Knowledge": {
                "Reason": `•Customer is unable to navigate the interface or perform a task due to lack of understanding/manuals.<br>•A contact center agent provided incorrect information about an Online Banking feature.`,
                "Requirements": `• Agent ID/Name (if known):<br>• Date & Time of Call:<br>• Incorrect information provided:<br>• Feature Attempted:<br>• Specific Cause: (UI Complexity / Missing Manual / Navigation Difficulty / User Error)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Add related Account Delay": {
                "Reason": `•Request to link a related account to the profile has exceeded the SLA.<br>•A request to link another account to the Online Banking profile has not been processed.`,
                "Requirements": `• Customer ID/Username:<br>• Account number to be linked:<br>• Date of Request:<br>• Account No:<br>• Specific Cause: (Back Office Delay / Manual Intervention Required / System Queue)`,
                "Template": `CM complaining about Add related Account Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - DC Replacement": {
                "Reason": `•Request to replace Debit Card via Online Banking failed or is stuck.<br>•A request for a Debit Card replacement made via Online Banking has not been processed or is delayed.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Date of Request:<br>• SR Number (if available):<br>• Card No:<br>• Specific Cause: (Address Validation Fail / Workflow Error / System Down)`,
                "Template": `CM complaining about Online - DC Replacement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - CC Replacement": {
                "Reason": `•Request to replace Credit Card via Online Banking failed or is stuck.<br>•A request for a Credit Card replacement made via Online Banking has not been processed.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Date of Request:<br>• SR Number (if available):<br>• Card No:<br>• Specific Cause: (Address Validation Fail / Workflow Error / System Down)`,
                "Template": `CM complaining about Online - CC Replacement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Change DD Account": {
                "Reason": `•Error in updating the source account number for Direct Debit instructions.<br>•An online request to change the source account for a Direct Debit instruction failed or was not processed.`,
                "Requirements": `• Customer ID/Username:<br>• Biller Name:<br>• Old Source Account:<br>• New Source Account:<br>• Date of Request:<br>• Old/New Account:<br>• Specific Cause: (Update Failure / System Latency / Invalid Account Status)`,
                "Template": `CM complaining about Online - Change DD Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Change DD Percentage": {
                "Reason": `•Error in modifying the repayment percentage for Direct Debit via portal.<br>•An online request to change the percentage for a Direct Debit instruction was not executed.`,
                "Requirements": `• Customer ID/Username:<br>• Biller Name:<br>• Old Percentage:<br>• New Percentage:<br>• Date of Request:<br>• Percentage:<br>• Specific Cause: (Parameter Update Fail / System Reject / Invalid Value)`,
                "Template": `CM complaining about Online - Change DD Percentage a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Account opening": {
                "Reason": `•Failure to open a sub-account digitally through the web portal.<br>•The customer faced a technical error or difficulty while trying to open a new account through the Online Banking platform.`,
                "Requirements": `• Customer ID/Username (if existing):<br>• Stage in application process where error occurred:<br>• Error message text:<br>• Screenshot of the error:<br>• Account Type:<br>• Specific Cause: (E-KYC Fail / Signature Missing / Core System Sync Error)`,
                "Template": `CM complaining about Online-Account opening a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-CD/TD Request": {
                "Reason": `•Issue with booking a Certificate of Deposit or Time Deposit online.<br>•A request to book a new Certificate of Deposit or Time Deposit via Online Banking was not processed correctly.`,
                "Requirements": `• Customer ID/Username:<br>• Amount & Tenor of deposit:<br>• Date of Request:<br>• Error message or issue description:<br>• Amount:<br>• Specific Cause: (Interest Rate Mismatch / Booking Failure / Insufficient Funds Error)`,
                "Template": `CM complaining about Online-CD/TD Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Clear Fields": {
                "Reason": `•UI fields do not reset or clear after transaction completion or cancellation.<br>•Data fields on an online form are not clearing properly, causing a poor user experience.`,
                "Requirements": `• Web page/form name:<br>• Description of the issue:<br>• Browser & Device used:<br>• Specific Cause: (Browser Cache Issue / UI Bug / Script Error)`,
                "Template": `CM complaining about Online - Clear Fields a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - officer contact": {
                "Reason": `•Issue with "Secure Message" or "Chat" feature within Online Banking.<br>•The "Contact my Officer/RM" feature in Online Banking is not working or the message was not delivered.`,
                "Requirements": `• Customer ID/Username:<br>• Date of message attempt:<br>• Officer/RM Name:<br>• Specific Cause: (Message Send Fail / No Response / Chatbot Loop)`,
                "Template": `CM complaining about Online - officer contact a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Wrong Card Number": {
                "Reason": `•The masked card number displayed does not match the physical card.<br>•The Online Banking platform is displaying an incorrect or unfamiliar card number.`,
                "Requirements": `• Customer ID/Username:<br>• Incorrect Masked Card Number shown:<br>• Screenshot of the issue:<br>• Card No:<br>• Specific Cause: (Reissue Update Delay / Database Error / UI Mapping Glitch)`,
                "Template": `CM complaining about Online - Wrong Card Number a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-funds movements": {
                "Reason": `•General display issue with fund movement history or categorization.<br>•The transaction history or account movement screen is not loading or showing incorrect/incomplete data.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Date range selected:<br>• Screenshot of the issue:<br>• Account No:<br>• Specific Cause: (Display Error / Uncategorized Trans / Sorting Issue)`,
                "Template": `CM complaining about Online-funds movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Hard Token delivery delay": {
                "Reason": `•Physical security token requested via Online Banking has not arrived.<br>•There is a delay in the delivery of a physical hard token required for Online Banking authentication.`,
                "Requirements": `• Customer Name:<br>• Customer ID:<br>• Date of Request:<br>• Courier Reference (if available):<br>• Delivery Address:<br>• Specific Cause: (Courier Delay / Out of Stock / Order Lost)`,
                "Template": `CM complaining about Hard Token delivery delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Customer Requests": {
                "Reason": `•Generic service request (e.g. Cheque Book, Status Letter) is stuck.<br>•A service request submitted through Online Banking (e.g., cheque book) has not been processed.`,
                "Requirements": `• Customer ID/Username:<br>• Type of Request:<br>• Date of Request:<br>• SR Number (if available):<br>• Specific Cause: (Workflow Failure / Pending Approval / System Error)`,
                "Template": `CM complaining about Online-Customer Requests a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Related Account": {
                "Reason": `•Visibility issue of a related account on the Online Banking profile.<br>•The customer can see an account on their profile that does not belong to them.`,
                "Requirements": `• Customer ID/Username:<br>• Full Account Number of the unfamiliar account:<br>• Screenshot of the issue:<br>• Account No:<br>• Specific Cause: (CIF Linkage Error / Backend Sync Delay / Profile Mismatch)`,
                "Template": `CM complaining about Online-Related Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer Confirmation": {
                "Reason": `•Failure to generate or receive the transaction receipt (PDF/Email).<br>•The customer is not receiving an email or SMS confirmation after successfully completing a fund transfer.`,
                "Requirements": `• Customer ID/Username:<br>• Transaction Reference Number:<br>• Date & Amount of Transfer:<br>• Registered mobile/email for alerts:<br>• Ref No:<br>• Specific Cause: (Email Gateway Fail / PDF Generation Error / Pop-up Blocker)`,
                "Template": `CM complaining about Transfer Confirmation a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Historical Request": {
                "Reason": `•User unable to retrieve archived data or past transaction history (>6 months).<br>•A request for historical transaction data or an old statement via Online Banking has been delayed or failed.`,
                "Requirements": `• Customer ID/Username:<br>• Date range requested:<br>• Date of Request:<br>• SR Number (if available):<br>• Specific Cause: (Archive Retrieval Fail / Data Gap / System Timeout)`,
                "Template": `CM complaining about Historical Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Loan Schedule": {
                "Reason": `•Loan repayment schedule not displaying or showing incorrectly.<br>•The customer is unable to view or download the amortization schedule for their loan on Online Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Loan Account Number:<br>• Loan ID:<br>• Specific Cause: (Display Glitch / Data Retrieval Fail / PDF Download Error)`,
                "Template": `CM complaining about Online - Loan Schedule a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online – EPP": {
                "Reason": `•Easy Payment Plan (EPP) conversion request failed on the web.<br>•The option to convert a credit card transaction into an Easy Payment Plan (EPP) is not working online.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Transaction details to be converted (Merchant, Date, Amount):<br>• Screenshot of error:<br>• Trans ID:<br>• Specific Cause: (Eligibility Check Fail / System Error / Request Timed Out)`,
                "Template": `CM complaining about Online – EPP a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP Dissatisfaction": {
                "Reason": `•User unhappy with OTP method, timing, or complexity.<br>•The customer is dissatisfied with the OTP process, finding it cumbersome, slow, or unreliable.`,
                "Requirements": `• Customer ID/Username:<br>• Specific feedback on the OTP process:<br>• Specific Cause: (Code Validity Too Short / Delivery Latency / Process Too Long)`,
                "Template": `CM complaining about OTP Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Data Update Request": {
                "Reason": `•Request to update personal info (KYC) via web is stuck.<br>•A request to update personal data submitted via Online Banking was not processed.`,
                "Requirements": `• Customer ID/Username:<br>• Data that was updated:<br>• Date of Request:<br>• SR Number (if available):<br>• Update Field:<br>• Specific Cause: (Document Upload Fail / Approval Delay / System Reject)`,
                "Template": `CM complaining about Online - Data Update Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Limit Increase": {
                "Reason": `•Request to increase transfer limits rejected or failed.<br>•A request for a credit card limit increase submitted via Online Banking has been pending for too long or failed.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Date of Request:<br>• SR Number (if available):<br>• Requested Limit:<br>• Specific Cause: (Policy Decline / System Error / Soft Token Fail)`,
                "Template": `CM complaining about Online - Limit Increase a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Card Closure": {
                "Reason": `•Request to close a card via web interface not executed.<br>•A request to close a credit card submitted via Online Banking has not been processed.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Date of Request:<br>• SR Number (if available):<br>• Card No:<br>• Specific Cause: (Workflow Failure / Pending Auth / System Error)`,
                "Template": `CM complaining about Online - Card Closure a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Wrong balance": {
                "Reason": `•General complaint about balance mismatch on dashboard.`,
                "Requirements": `• Account Number or credit Card Fake ACC #<br>• Balance on IB #<br>• Balance on system #<br>• Date #<br>• Cm asked to send screen shot from his email #<br>• Calling Party # <br>• Specific Cause: (Cache Latency / Sync Error / Pending Trans Impact)`,
                "Template": `CM complaining about Online-Wrong balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "E-banking request Delay": {
                "Reason": `•Delay in processing a registration or service activation request.`,
                "Requirements": `• Account:<br>• Request Date:<br>• Request Channel:<br>• Calling Party :<br>• Specific Cause: (SLA Breach / Manual Processing / System Queue)`,
                "Template": `CM complaining about E-banking request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP Request Delay": {
                "Reason": `•SMS OTP arrives too late to be used (expired).`,
                "Requirements": `• Account:<br>• Request Date:<br>• Request Channel:<br>• Calling Party :<br>• Specific Cause: (SMS Gateway Latency / Network Congestion / Provider Issue)`,
                "Template": `CM complaining about OTP Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Missing credit card": {
                "Reason": `•Active Credit Card not showing on Online Banking dashboard.`,
                "Requirements": `• Card Masked Number:<br>• Date And Time:<br>• Account Number:<br>• Customer number:<br>• Mobile Version :<br>• Calling Party:<br>• Specific Cause: (View Rights Issue / Host Mapping Error / Card Status Error)`,
                "Template": `CM complaining about Online-Missing credit card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer Limit": {
                "Reason": `•User unable to transfer due to hitting a limit they believe is incorrect.`,
                "Requirements": `• Account Number:<br>• Amount :<br>• Date Of transaction :<br>• Time :<br>• Error :<br>• Specific Cause: (Daily Limit Reached / Monthly Limit Reached / Lower Limit Applied)`,
                "Template": `CM complaining about Transfer Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Wrong Displayed Name": {
                "Reason": `•Customer name shown on dashboard is incorrect or misspelled.<br>•The customer's name is misspelled or displayed incorrectly on the Online Banking portal.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot showing the incorrect name:<br>• Correct name spelling:<br>• Name Shown:<br>• Specific Cause: (Data Mapping Error / Old Name Persisting / Encoding Issue)`,
                "Template": `CM complaining about Online - Wrong Displayed Name a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP Disabled": {
                "Reason": `•The One-Time Password service is locked for the user.<br>•The customer's OTP service has been disabled, preventing them from performing transactions.`,
                "Requirements": `• Customer ID/Username:<br>• Registered Mobile Number:<br>• Specific Cause: (Security Lock / Sim Swap Suspension / Operator Issue)`,
                "Template": `CM complaining about OTP Disabled a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Captcha Issue": {
                "Reason": `•Security captcha not loading, illegible, or rejecting valid input.<br>•The customer is unable to pass the Captcha verification step during login or another process.`,
                "Requirements": `• Customer ID/Username:<br>• Page where Captcha appears (Login, etc.):<br>• Browser & Device used:<br>• Screenshot of the Captcha issue:<br>• Browser:<br>• Specific Cause: (Browser Incompatibility / Captcha Failure / Loop Error)`,
                "Template": `CM complaining about Online - Captcha Issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Service is-unavailable": {
                "Reason": `•Website displays "Service Unavailable" or Error 500.<br>•The customer is receiving a "Service Unavailable" or "System Error" message when trying to access Online Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Date & Time of attempt:<br>• Error message text:<br>• Screenshot of the error:<br>• Time of Error:<br>• Specific Cause: (Server Downtime / Planned Maintenance / Network Issue)`,
                "Template": `CM complaining about Online-Service is-unavailable a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Account movements": {
                "Reason": `•Transaction history for account is missing or incorrect.<br>•The transaction history (account movements) is not loading or is showing incomplete data.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Date range selected:<br>• Screenshot of the issue:<br>• Date Range:<br>• Specific Cause: (Pagination Error / Filter Error / Missing Entry)`,
                "Template": `CM complaining about Online-Account movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Beneficiaries": {
                "Reason": `•Issues adding, deleting, or managing transfer beneficiaries.<br>•The customer is unable to add a new beneficiary for fund transfers due to a system error.`,
                "Requirements": `• Customer ID/Username:<br>• Beneficiary Account Number:<br>• Error message text:<br>• Screenshot of the error:<br>• Beneficiary Name:<br>• Specific Cause: (Validation Error / List Full / OTP Verification Fail)`,
                "Template": `CM complaining about Online-Beneficiaries a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Charity payment": {
                "Reason": `•Donation deducted from account but not acknowledged.<br>•The customer is facing an error while trying to make a donation to a charity through the Online Banking portal.`,
                "Requirements": `• Customer ID/Username:<br>• Charity Name:<br>• Amount:<br>• Error message text:<br>• Screenshot of the error:<br>• Specific Cause: (Link Failure / Settlement Delay / Receipt Missing)`,
                "Template": `CM complaining about Online-Charity payment a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Credit Card Movements": {
                "Reason": `•Transaction history for credit card is missing or incorrect.<br>•The customer cannot view the transaction history for their credit card on the Online Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Screenshot of the issue:<br>• Date Range:<br>• Specific Cause: (Unbilled Trans Missing / Display Error / Sort Order)`,
                "Template": `CM complaining about Online-Credit Card Movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Credit card settlement": {
                "Reason": `•Payment for CC made via Online Banking not reflecting.<br>•An attempt to pay a credit card bill via Online Banking failed, but the account may have been debited.`,
                "Requirements": `• Customer ID/Username:<br>• Source Account Number:<br>• Masked Card Number:<br>• Amount:<br>• Date & Time of Transaction:<br>• Transaction Reference Number:<br>• Specific Cause: (Posting Delay / Batch Failure / System Timeout)`,
                "Template": `CM complaining about Online-Credit card settlement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Fund transfer": {
                "Reason": `•Failure to execute money transfer through the website.<br>•A fund transfer initiated via Online Banking has failed or is pending for an unusually long time.`,
                "Requirements": `• Customer ID/Username:<br>• Transaction Reference Number:<br>• Amount & Beneficiary Details:<br>• Date & Time of Transaction:<br>• Specific Cause: (System Timeout / Daily Limit Reached / Service Unavailable)`,
                "Template": `CM complaining about Online-Fund transfer a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Log in": {
                "Reason": `•User unable to authenticate and access the website.<br>•The customer is unable to log in due to a password, username, or other technical issue.`,
                "Requirements": `• Customer ID/Username:<br>• Error message text:<br>• Browser & Device used:<br>• Screenshot of the error:<br>• Specific Cause: (Invalid Credentials / Locked User / Browser Issue)`,
                "Template": `CM complaining about Online-Log in a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Missing product": {
                "Reason": `•General complaint about any missing product (Loan/Investment).<br>•One of the customer's products (e.g., an account, loan) is not showing up on their Online Banking dashboard.`,
                "Requirements": `• Customer ID/Username:<br>• Details of the missing product (Account Number, etc.):<br>• Product Type:<br>• Specific Cause: (Mapping Error / Sync Failure / UI Display Bug)`,
                "Template": `CM complaining about Online-Missing product a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Monthly statement": {
                "Reason": `•Unable to view or download the monthly e-statement PDF.<br>•The customer is unable to view or download their monthly e-statement from the Online Banking portal.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Statement Month & Year:<br>• Description of issue (e.g., error, file corrupt):<br>• Specific Cause: (File Corrupted / Link Expired / Generation Failure)`,
                "Template": `CM complaining about Online-Monthly statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-OTP Error": {
                "Reason": `•OTP entered is rejected as invalid or system throws error.<br>•The customer is not receiving the One-Time Password (OTP) via SMS or the received OTP is invalid.`,
                "Requirements": `• Customer ID/Username:<br>• Registered Mobile Number:<br>• Action requiring OTP:<br>• Date & Time of attempt:<br>• Error message (if any):<br>• Specific Cause: (System Out of Sync / Invalid Code / Input Error)`,
                "Template": `CM complaining about Online-OTP Error a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Registration": {
                "Reason": `•User unable to sign up for Online Banking service.<br>•The customer is facing a technical error while trying to register for Online Banking for the first time.`,
                "Requirements": `• Full Name & National ID:<br>• Account/Card number used for registration:<br>• Error message text:<br>• Screenshot of the error:<br>• Error Stage:<br>• Specific Cause: (Card Validation Fail / ID Mismatch / System Down)`,
                "Template": `CM complaining about Online-Registration a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Reset password": {
                "Reason": `•Failure to reset the login password via "Forgot Password".<br>•The password reset process is failing (e.g., link not received, link expired, error on page).`,
                "Requirements": `• Customer ID/Username:<br>• Registered email/mobile number:<br>• Description of the failure point:<br>• Error Msg:<br>• Specific Cause: (Link Expired / OTP Fail / Policy Violation)`,
                "Template": `CM complaining about Online-Reset password a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Showing Closed Products": {
                "Reason": `•Products closed in the past still appear on the dashboard.<br>•A previously closed account, card, or loan is still appearing as active on the Online Banking dashboard.`,
                "Requirements": `• Customer ID/Username:<br>• Details of the closed product:<br>• Approximate Date of Closure:<br>• Product:<br>• Specific Cause: (Data Purge Failure / Display Cache / Status Flag Error)`,
                "Template": `CM complaining about Online-Showing Closed Products a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Wrong Loan Balance": {
                "Reason": `•Outstanding loan balance displayed differs from actual core balance.<br>•The outstanding balance for a loan is displayed incorrectly on the Online Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Loan Account Number:<br>• Incorrect balance displayed:<br>• Expected correct balance (if known):<br>• Screenshot:<br>• Displayed Bal:<br>• Specific Cause: (Calculation Display Error / Update Delay / Core Mismatch)`,
                "Template": `CM complaining about Online - Wrong Loan Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Missing Account": {
                "Reason": `•Active account exists but is not visible on the dashboard.<br>•A specific savings or current account is missing from the customer's Online Banking dashboard.`,
                "Requirements": `• Customer ID/Username:<br>• Missing Account Number:<br>• Account No:<br>• Specific Cause: (View Rights Issue / Host Mapping Error / Profile Sync)`,
                "Template": `CM complaining about Online - Missing Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online-Missing CD / TD": {
                "Reason": `•Active CD or TD not appearing in the portfolio view.<br>•A Certificate of Deposit or Time Deposit owned by the customer is not being displayed on their profile.`,
                "Requirements": `• Customer ID/Username:<br>• CD/TD Account Number or details:<br>• CD Ref:<br>• Specific Cause: (Data Purge Error / Display Cache / Product Mapping)`,
                "Template": `CM complaining about Online-Missing CD / TD a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Wrong AC Balance": {
                "Reason": `•Account balance shown on screen does not match actual funds.<br>•The balance of a savings or current account is displayed incorrectly on Online Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Incorrect balance displayed:<br>• Time of checking:<br>• Screenshot:<br>• Displayed Bal:<br>• Specific Cause: (Cache Latency / Sync Error / Pending Trans Impact)`,
                "Template": `CM complaining about Online - Wrong AC Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Wrong CC Balance": {
                "Reason": `•Credit Card balance/limit shown is incorrect.<br>•The outstanding balance or available limit for a credit card is displayed incorrectly on Online Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Incorrect balance/limit displayed:<br>• Screenshot:<br>• Displayed Bal:<br>• Specific Cause: (Posting Delay / Authorization Hold Error / Display Bug)`,
                "Template": `CM complaining about Online - Wrong CC Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Online - Missing Card Details": {
                "Reason": `•Card image or specific details (CVV/Expiry) not loading.<br>•The details for a debit or credit card are missing or incomplete on the portal.`,
                "Requirements": `• Customer ID/Username:<br>• Type of Card (Debit/Credit):<br>• Screenshot of the issue:<br>• Card No:<br>• Specific Cause: (Image Load Fail / Masking Error / Data Fetch Error)`,
                "Template": `CM complaining about Online - Missing Card Details a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CBE Related Mandates": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Online-reactivate credit card": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Online-Historical Stt EPP Disp": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Online Banking Dissatisfaction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Smart Wallet": {
            "SW Closure Req delay": {
                "Reason": `•Request to close the wallet pending beyond SLA (preventing opening at another bank).<br>•A request to close a Smart Wallet account has been delayed.`,
                "Requirements": `• Wallet Mobile Number:<br>• Date of Closure Request:<br>• Request Date:<br>• Specific Cause: (System Stuck / Manual Process Delay / Meeza Network Error)`,
                "Template": `CM complaining about SW Closure Req delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Charge Back TAT": {
                "Reason": `•Dispute resolution time exceeded the agreed Turn Around Time.<br>•The turnaround time for a chargeback request on a disputed Smart Wallet transaction has been exceeded.`,
                "Requirements": `• Wallet Mobile Number:<br>• Dispute Reference Number:<br>• Date of Dispute:<br>• Dispute Date:<br>• Specific Cause: (Investigation Delay / Vendor Response Delay / SLA Breach)`,
                "Template": `CM complaining about Charge Back TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispensed Transaction": {
                "Reason": `•Cash-out transaction (ATM/Agent) debited from wallet but cash not dispensed.<br>•An ATM cash withdrawal using the smart wallet was debited, but cash was not dispensed.`,
                "Requirements": `• Wallet Mobile Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Amount:<br>• Missing Amount:<br>• CP#:<br>• Agent/ATM ID:<br>• Amount:<br>• Specific Cause: (Hardware Error / Partial Dispense / Timeout during dispense)`,
                "Template": `CM complaining about Dispensed Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Trans. Sett. Delay": {
                "Reason": `•Transaction completed but settlement/confirmation is pending.<br>•The reversal for a failed Smart Wallet transaction (e.g., failed purchase) has been delayed.`,
                "Requirements": `• Wallet Mobile Number:<br>• Original Transaction Date & Amount:<br>• Merchant/Biller Name:<br>• Transaction Reference Number:<br>• Trans ID:<br>• Specific Cause: (Settlement Lag / Network Timeout / Status Mismatch)`,
                "Template": `CM complaining about Incomplete Trans. Sett. Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Operational error or poor service by staff/agent regarding wallet services.<br>•The customer received poor or incorrect support from a contact center agent regarding a Smart Wallet issue.`,
                "Requirements": `• Wallet Mobile Number:<br>• Date & Time of Call:<br>• Agent ID/Name (if known):<br>• Description of the incident:<br>• Scenario:<br>• Specific Cause: (Agent Refusal / Wrong Info Provided / Process Violation)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Customer or Agent unable to perform transaction due to lack of training/info.<br>•A bank agent was unable to answer basic questions about Smart Wallet features or fees.`,
                "Requirements": `• Wallet Mobile Number:<br>• Agent/Branch Name:<br>• Date of Interaction:<br>• Question asked:<br>• Specific Cause: (UI Complexity / Agent Unaware of Service / Missing Manual)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Suggestion": {
                "Reason": `•Customer proposing a new feature or improvement for the wallet app.<br>•The customer is providing a suggestion to improve the Smart Wallet service or add a new feature.`,
                "Requirements": `• Wallet Mobile Number:<br>• Detailed description of the suggestion:<br>• Suggestion:<br>• Specific Cause: (UI Improvement / New Biller Request / Feature Request)`,
                "Template": `CM complaining about Suggestion a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete TAT": {
                "Reason": `•General service request (non-financial) exceeded processing time.<br>•A service request related to the Smart Wallet was not completed within the promised timeframe.`,
                "Requirements": `• Wallet Mobile Number:<br>• SR Number:<br>• Date of Request:<br>• Promised TAT:<br>• Request Type:<br>• Specific Cause: (Backlog / System Delay / Lost Request)`,
                "Template": `CM complaining about Incomplete TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Smart Wallet Update delay": {
                "Reason": `•KYC or data update on the wallet profile is taking too long.<br>•A request to update customer information on the Smart Wallet has not been processed.`,
                "Requirements": `• Wallet Mobile Number:<br>• Information to be updated:<br>• Date of Request:<br>• Update Type:<br>• Specific Cause: (Meeza Sync Delay / Document Review / System Error)`,
                "Template": `CM complaining about Smart Wallet Update delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Disputed transaction": {
                "Reason": `•Customer does not recognize a transaction performed on their wallet.<br>•The customer is reporting an unauthorized or incorrect transaction on their Smart Wallet.`,
                "Requirements": `• Wallet Mobile Number:<br>• Transaction Amount:<br>• Merchant/Biller Name:<br>• Reason for Dispute:<br>• Trans Date:<br>• Specific Cause: (Fraud Claim / Duplicate Debit / Unauthorized Access)`,
                "Template": `CM complaining about SW - Disputed transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Product Policy": {
                "Reason": `•Dissatisfaction with wallet limits, rules, or regulatory constraints.(FYI)<br>•The customer is complaining about a specific policy related to the Smart Wallet (e.g., transaction limits, fees).(FYI)`,
                "Requirements": `• Wallet Mobile Number:<br>• Specific policy in question:<br>• How this policy is affecting them:<br>• Policy:<br>• Specific Cause: (Daily Limit Complaint / CBE Regulations / ID Requirement)`,
                "Template": `CM complaining about SW - Product Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Fawry services issue": {
                "Reason": `•Failure to pay bills or use Fawry services via the wallet.<br>•The customer is experiencing errors when trying to use Fawry bill payment services within the Smart Wallet app.`,
                "Requirements": `• Wallet Mobile Number:<br>• Biller Name:<br>• Error message received:<br>• Screenshot of the error:<br>• Biller Name:<br>• Specific Cause: (Aggregator Down / Biller System Error / Payment Declined)`,
                "Template": `CM complaining about SW - Fawry services issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW  Dissatisfaction": {
                "Reason": `•General unhappiness with the wallet experience or app performance.<br>•The customer is expressing general dissatisfaction with the Smart Wallet service.`,
                "Requirements": `• Wallet Mobile Number:<br>• General reason for dissatisfaction:<br>• Feedback:<br>• Specific Cause: (Poor UX / Frequent Downtime / Complicated Steps)`,
                "Template": `CM complaining about SW  Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Services Fees": {
                "Reason": `•Dispute regarding fees charged for wallet transactions.<br>•The customer is disputing a service fee charged to their Smart Wallet.`,
                "Requirements": `• Wallet Mobile Number:<br>• Fee Amount:<br>• Date Charged:<br>• Type of Fee:<br>• Amount:<br>• Specific Cause: (Fee not Disclosed / System Error / Exempt Trans Charged)`,
                "Template": `CM complaining about SW Services Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Screen Shot Blocked": {
                "Reason": `•User unable to take screenshot due to app security policy.<br>•The app blocks the customer from taking screenshots, preventing them from saving receipts or reporting errors.`,
                "Requirements": `• Wallet Mobile Number:<br>• Device type:<br>• Device:<br>• Specific Cause: (App Security Policy / OS Restriction / Inconvenience)`,
                "Template": `CM complaining about SW Screen Shot Blocked a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Send Money SMS": {
                "Reason": `•SMS notification for P2P transfer not received by sender or receiver.<br>•The beneficiary is not receiving the SMS with the withdrawal code after a "Send Money" transaction.`,
                "Requirements": `• Sender's Wallet Number:<br>• Beneficiary's Mobile Number:<br>• Transaction Date & Amount:<br>• Mobile No:<br>• Specific Cause: (Gateway Failure / Notification Service Down / Telco Issue)`,
                "Template": `CM complaining about SW Send Money SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Payments Failure": {
                "Reason": `•Failure to pay at a merchant (QR Code or Online).<br>•General complaint about frequent failures when trying to make any type of payment from the wallet.`,
                "Requirements": `• Wallet Mobile Number:<br>• Type of payment attempted (Bill pay, P2P, etc.):<br>• Frequency of the issue:<br>• Merchant:<br>• Specific Cause: (QR Invalid / POS Error / System Decline / Insufficient Funds)`,
                "Template": `CM complaining about SW Payments Failure a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Wallet Inactive": {
                "Reason": `•Wallet status is dormant, suspended, or closed unexpectedly.<br>•The customer's wallet has become inactive or dormant, and they are unable to use it.`,
                "Requirements": `• Wallet Mobile Number:<br>• Last transaction date (if known):<br>• Wallet No:<br>• Specific Cause: (Dormancy Policy / KYC Expiry / System Suspension)`,
                "Template": `CM complaining about SW Wallet Inactive a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Product Feature": {
                "Reason": `•Complaint about a missing specific feature compared to competitors.<br>•The customer is complaining about how a specific feature of the Smart Wallet works or its limitations.`,
                "Requirements": `• Wallet Mobile Number:<br>• Name of the feature:<br>• Description of the issue/limitation:<br>• Feature:<br>• Specific Cause: (Competitor Comparison / Functional Gap / Usability Issue)`,
                "Template": `CM complaining about Product Feature a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Registration request Delay": {
                "Reason": `•Delay in activating the wallet after submitting registration.`,
                "Requirements": `• Request Date:<br>• Request Channel:<br>• Smart wallet number :<br>• Calling Party:<br>• Specific Cause: (Meeza Check Pending / Data Mismatch / System Queue)`,
                "Template": `CM complaining about Registration request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "ChargeBack Request": {
                "Reason": `•Customer initiating a refund request for failed service/purchase.`,
                "Requirements": `• Smart wallet:<br>• Amount<br>• Date / Time of transaction:<br>• Machine location( Fawry Store Address) :<br>• Machine (Fawry) # :<br>• Calling Party:""<br>• Specific Cause: (Service Not Received / Double Billing / Merchant Error)`,
                "Template": `CM complaining about ChargeBack Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Load wallet issue": {
                "Reason": `•Failure to deposit money into wallet (via Card/ATM/Agent).`,
                "Requirements": `• Smart wallet number :<br>• Date of load:<br>• Amount loaded:<br>• Calling Party:<br>• Specific Cause: (Bank Decline / Gateway Error / Source Limit Reached)`,
                "Template": `CM complaining about SW - Load wallet issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Aman Services Issue": {
                "Reason": `•Failure to use Aman aggregator services within the wallet.`,
                "Requirements": `• Smart wallet:<br>• Billing account:<br>• Biller code:<br>• Authorization code:<br>• Amount<br>• Date of transaction:<br>• Feedback on fawry gatway: (Disputed or successful)<br>• Calling Party:<br>• Specific Cause: (Integration Down / Transaction Failed / Timeout)`,
                "Template": `CM complaining about Aman Services Issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Linked Cards Availability": {
                "Reason": `•Linked bank cards not showing or not working for load/payment.`,
                "Requirements": `• Request Date:<br>• Request Channel:<br>• Smart wallet number :<br>• Card :<br>• Expiry Date:<br>• Calling Party:<br>• Specific Cause: (Tokenization Fail / Card Expired / Bank Block)`,
                "Template": `CM complaining about SW Linked Cards Availability a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Registration": {
                "Reason": `•Error during the sign-up process (Branch/Self-reg).`,
                "Requirements": `• Request Date:<br>• Request Channel:<br>• Smart wallet number :<br>• Calling Party:<br>• Specific Cause: (Already Registered / ID Mismatch / System Down)`,
                "Template": `CM complaining about SW - Registration a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Technical issue": {
                "Reason": `•Generic technical error or bug in the wallet application.`,
                "Requirements": `• Smart wallet number :<br>• Balance :<br>• Calling Party:<br>• Error Code:<br>• Specific Cause: (App Crash / Server Error / Button Not Working)`,
                "Template": `CM complaining about SW - Technical issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Wrong Wallet Balance": {
                "Reason": `•Balance displayed differs from actual ledger balance.`,
                "Requirements": `• Smart wallet number :<br>• Balance :<br>• Calling Party:<br>• Specific Cause: (Sync Error / Pending Debit / Cache Issue)`,
                "Template": `CM complaining about SW - Wrong Wallet Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Send Money issue": {
                "Reason": `•Failure to transfer funds to another wallet number.`,
                "Requirements": `• Smart Wallet Number :<br>• Beneficiary Number :<br>• Beneficiary Wallet<br>• Amount :<br>• Date Of transaction : <br>• Time Of Transaction :<br>• Copy of transaction :<br>• Specific Cause: (Invalid Number / Network Error / Limit Reached)`,
                "Template": `CM complaining about SW - Send Money issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Trans Refund delay": {
                "Reason": `•Approved refund not credited to wallet within timeframe.`,
                "Requirements": `• Details:<br>• SW Number:<br>• Amount:<br>• service provider:<br>• Receiver Number:<br>• Copy Of Trx:<br>• type of service:<br>• bill type:<br>• Specific Cause: (Settlement Delay / Manual Credit Pending / System Error)`,
                "Template": `CM complaining about Dispute Trans Refund delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete cash deposit": {
                "Reason": `•Cash given to Agent/ATM but not credited to wallet.`,
                "Requirements": `• Smart wallet #<br>• Depositor Mobile #<br>• Missing Amount #<br>• Machine ( ATM ) #<br>• Machine Location#<br>• Date of Transaction #<br>• Specific Cause: (Agent Error / Machine Jam / Network Timeout)`,
                "Template": `CM complaining about Incomplete cash deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Dispute": {
                "Reason": `•Dispute closed without satisfactory resolution or full investigation.`,
                "Requirements": `• Smart wallet #<br>• Depositor Mobile #<br>• Missing Amount <br>• Machine ( ATM ) #<br>• Machine Location#<br>• Date of Transaction#<br>• Time of transaction #<br>• Specific Cause: (Premature Closure / Logic Lack / Process Error)`,
                "Template": `CM complaining about Incomplete Dispute a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SW App Crashes": {
                "Reason": `•The wallet application force-closes or freezes.`,
                "Requirements": `• Time Stamp:<br>• Operating System:(Android)<br>• Version #<br>• Phone Model #<br>• Mobile Number # <br>• Specific Cause: (Bug / OS Incompatibility / Memory Issue)`,
                "Template": `CM complaining about SW App Crashes a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wallet Unregister": {
                "Reason": `•Request to unsubscribe/delete wallet from the system.`,
                "Requirements": `• Request Date:<br>• Request Channel:<br>• Smart wallet number :""<br>• Calling Party:<br>• SD#<br>• Mobile No:<br>• Specific Cause: (Meeza Unlink Fail / Pending Balance / Process Delay)`,
                "Template": `CM complaining about Wallet Unregister a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Wrong Activation Code": {
                "Reason": `•Activation code received is invalid or not working.`,
                "Requirements": `• Wallet Number #<br>• NID Number #<br>• Mobile Type #<br>• Android/IOS Version #<br>• Last Trial Date #<br>• Last Trial #<br>• Last Activation Code #<br>• Ticket # <br>• Code:<br>• Specific Cause: (Expired Code / System Generation Error / Typo)`,
                "Template": `CM complaining about SW Wrong Activation Code a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - SMS not Received": {
                "Reason": `•General failure to receive SMS alerts from wallet system.`,
                "Requirements": `• Wallet Number #<br>• Mobile network # ( Vodafone, Etisalat, Orange, WE) Please confirm with the customer if he change network or not.<br>• Mobile Type #<br>• Android/IOS Version #<br>• Last Trial Date #<br>• Last Trial Time #<br>• Ticket #<br>• Trans Type:<br>• Specific Cause: (Gateway Issue / DND Active / Network Congestion)`,
                "Template": `CM complaining about SW - SMS not Received a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Pin Code Set/Reset": {
                "Reason": `•Issues setting or resetting the MPIN (Master PIN).<br>•The customer is unable to set or reset their Smart Wallet PIN code through the app.`,
                "Requirements": `• Wallet Mobile Number:<br>• Error message received:<br>• Device Model & OS Version:<br>• Error Msg:<br>• Specific Cause: (OTP Fail / System Reject / Complexity Rule)`,
                "Template": `CM complaining about SW Pin Code Set/Reset a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Adding favorites issue": {
                "Reason": `•Unable to save billers or contacts to favorites list.<br>•The customer is unable to save a frequent biller or transfer recipient as a "favorite" in the app.`,
                "Requirements": `• Wallet Mobile Number:<br>• Biller/Recipient details:<br>• Error message received:<br>• Screenshot of the error:<br>• Contact/Biller:<br>• Specific Cause: (Database Error / List Full / App Glitch)`,
                "Template": `CM complaining about SW - Adding favorites issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - ATM Cash out issue": {
                "Reason": `•Specific failure when withdrawing cash from ATM using OTP/QR.<br>•The customer is unable to perform a cardless cash withdrawal from an ATM using their Smart Wallet.`,
                "Requirements": `• Wallet Mobile Number:<br>• ATM Location/ID:<br>• Date & Time of attempt:<br>• Error message on ATM or app:<br>• ATM ID:<br>• Specific Cause: (OTP Expired / Switch Timeout / ATM Hardware Fail)`,
                "Template": `CM complaining about SW - ATM Cash out issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Purchase issue": {
                "Reason": `•Failure to complete a purchase at a merchant/website.<br>•A purchase transaction using the Smart Wallet (e.g., QR payment) at a merchant is failing.`,
                "Requirements": `• Wallet Mobile Number:<br>• Merchant Name:<br>• Date & Time of attempt:<br>• Error message received:<br>• Merchant:<br>• Specific Cause: (Payment Gateway Down / Insufficient Balance / Declined)`,
                "Template": `CM complaining about SW - Purchase issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Agent Cash out issue": {
                "Reason": `•Agent refused service or system failed at agent location.<br>•The customer is unable to perform a cash-out transaction at an authorized banking agent's location.`,
                "Requirements": `• Wallet Mobile Number:<br>• Agent Name & Location:<br>• Date & Time of attempt:<br>• Reason for failure:<br>• Agent ID:<br>• Specific Cause: (Agent Liquidity Issue / POS Failure / System Down)`,
                "Template": `CM complaining about SW - Agent Cash out issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - Online card issue": {
                "Reason": `•Error generating or using the Virtual Card Number (VCN).<br>•The customer is unable to generate or use the temporary "Online Card" for e-commerce purchases.`,
                "Requirements": `• Wallet Mobile Number:<br>• Error message received:<br>• Screenshot of the error:<br>• VCN Amount:<br>• Specific Cause: (Generation Fail / Authorization Decline / Limit Issue)`,
                "Template": `CM complaining about SW - Online card issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Missing Services": {
                "Reason": `•Icons or services missing from the app menu.<br>•A service advertised for the Smart Wallet is not actually available in the app.`,
                "Requirements": `• Wallet Mobile Number:<br>• Name of the missing service:<br>• Service:<br>• Specific Cause: (App Version Outdated / Profile Configuration Error)`,
                "Template": `CM complaining about SW Missing Services a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW TRX Log Missing Details": {
                "Reason": `•Transaction history incomplete or missing details.<br>•The transaction log in the Smart Wallet app is missing key details (e.g., merchant name, reference number).`,
                "Requirements": `• Wallet Mobile Number:<br>• Screenshot of the transaction log:<br>• Date Range:<br>• Specific Cause: (Logging Error / Data Gap / Display Bug)`,
                "Template": `CM complaining about SW TRX Log Missing Details a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Login Issue": {
                "Reason": `•Unable to access the wallet app (MPIN rejected/Locked).<br>•The customer is unable to log in to their Smart Wallet app.`,
                "Requirements": `• Wallet Mobile Number:<br>• Device Model & OS Version:<br>• Error message text:<br>• Screenshot of the error:<br>• Error Msg:<br>• Specific Cause: (Invalid MPIN / Account Locked / Server Error)`,
                "Template": `CM complaining about SW Login Issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW MPIN issue": {
                "Reason": `•General problems related to the 6-digit wallet PIN.<br>•The customer is facing an issue with their Mobile PIN (MPIN) for transaction authorization.`,
                "Requirements": `• Wallet Mobile Number:<br>• Action being performed:<br>• Error message received:<br>• Issue:<br>• Specific Cause: (Forgot MPIN / PIN Blocked / Reset Failed)`,
                "Template": `CM complaining about SW MPIN issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Unclear Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SW - Request to Pay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SW - Data Cleansing": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Rating": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Promotion": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Good Service Rating": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SW - AML/Fraud": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SW - Undisplayed card/account": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CBE Related Mandates": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SW -  Account Locked": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "SW Favorites Lost": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "Yes", "Related_CC_&_Not": "No" }
        },
        "Mobile Banking": {
            "MB - Exchange Rate": {
                "Reason": `•The Currency Exchange rate displayed on the app differs from the actual execution rate.<br>•The foreign exchange rates displayed in the Mobile App are not updating or appear incorrect.`,
                "Requirements": `• Screenshot of the rates:<br>• Date and time of checking:<br>• Currency Pair:<br>• Specific Cause: (Live Feed Delay / Spread Mismatch / Display Glitch)`,
                "Template": `CM complaining about MB - Exchange Rate a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB - Branches / ATM (Find Us) ": {
                "Reason": `•The "Find Us" or Locator feature is showing incorrect locations or GPS coordinates.<br>•The branch or ATM locator feature in the app is showing incorrect locations or is not working.`,
                "Requirements": `• Location being searched:<br>• Screenshot of the issue:<br>• Specific Cause: (Map API Error / Outdated Data / GPS Glitch / Search Failure)`,
                "Template": `CM complaining about MB - Branches / ATM (Find Us)  a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB - Data Update Request": {
                "Reason": `•Customer request to update profile/KYC data via the app is stuck or failed.<br>•An online request to update personal data submitted via the Mobile App was not processed.`,
                "Requirements": `• Customer ID/Username:<br>• Data updated:<br>• Date of Request:<br>• Field Updated:<br>• Specific Cause: (Document Upload Fail / System Timeout / Approval Delay)`,
                "Template": `CM complaining about MB - Data Update Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB- Huawei New Release": {
                "Reason": `•Specific technical issues related to the Huawei AppGallery version (HMS).<br>•The customer is experiencing issues with the Mobile App after a new software update on their Huawei device.`,
                "Requirements": `• Customer ID/Username:<br>• Huawei Phone Model:<br>• App Version:<br>• Phone Model:<br>• Specific Cause: (HMS Incompatibility / Crash on Launch / Update Unavailable)`,
                "Template": `CM complaining about MB- Huawei New Release a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Charity payment": {
                "Reason": `•Donation made via app deducted but not acknowledged by the charity.<br>•The customer is facing an error while trying to make a charity payment through the Mobile App.`,
                "Requirements": `• Customer ID/Username:<br>• Charity Name:<br>• Screenshot of the error:<br>• Specific Cause: (Link Failure / Settlement Delay / Receipt Missing)`,
                "Template": `CM complaining about MB-Charity payment a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Check Book Request": {
                "Reason": `•Request for a cheque book initiated on the app was not processed.<br>•A cheque book request submitted via the Mobile App has not been processed.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Date of Request:<br>• Specific Cause: (Integration Failure / Signature Missing / Branch Oversight)`,
                "Template": `CM complaining about MB-Check Book Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Wrong balance": {
                "Reason": `•The available/ledger balance shown on the app dashboard is incorrect.`,
                "Requirements": `• Account Number or credit Card Fake ACC #<br>• Balance on IB #<br>• Balance on system #<br>• Date #<br>• Cm asked to send screen shot from his email #<br>• Calling Party # <br>• Specific Cause: (Cache Latency / Sync Error / Pending Trans Impact / UI Bug)`,
                "Template": `CM complaining about MB-Wrong balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Registration": {
                "Reason": `•User unable to sign up or activate the Mobile Banking service.`,
                "Requirements": `• Account:<br>• Request Date:<br>• Request Channel:<br>• Calling Party :<br>• Specific Cause: (Card Validation Fail / ID Mismatch / System Down / User Exists)`,
                "Template": `CM complaining about MB-Registration a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-OTP Error": {
                "Reason": `•SMS OTP for app login or transaction is not received or rejected.`,
                "Requirements": `• Account:<br>• Request Date:<br>• Request Channel:<br>• Calling Party :<br>• Specific Cause: (SMS Gateway Latency / Sim Swap Lock / Invalid Code Error)`,
                "Template": `CM complaining about MB-OTP Error a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Missing credit card": {
                "Reason": `•Active Credit Card is not visible in the cards list on the app.`,
                "Requirements": `• Card Masked Number:<br>• Date And Time:<br>• Account Number:<br>• Customer number:<br>• Mobile Version :<br>• Calling Party:<br>• Specific Cause: (View Rights Issue / Host Mapping Error / Card Status Error)`,
                "Template": `CM complaining about MB-Missing credit card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Fund transfer": {
                "Reason": `•Failure to execute money transfer through the mobile application.`,
                "Requirements": `• Account Number:<br>• Amount :<br>• Date Of transaction :<br>• Time :<br>• Error :<br>• Specific Cause: (System Timeout / Daily Limit Reached / Service Unavailable / API Error)`,
                "Template": `CM complaining about MB-Fund transfer a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Credit Card Movements": {
                "Reason": `•Transaction history for the Credit Card is missing specific entries or won't load.<br>•The customer cannot view their credit card's transaction history on the Mobile Banking app.`,
                "Requirements": `• Customer ID/Username:<br>• Masked Card Number:<br>• Screenshot of the issue:<br>• Date Range:<br>• Specific Cause: (Pagination Error / API Fetch Fail / Unbilled Trans Missing)`,
                "Template": `CM complaining about MB-Credit Card Movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Credit card settlement": {
                "Reason": `•Credit card payment made via app failed to reflect or gave an error.<br>•An attempt to pay a credit card bill via the Mobile App failed.`,
                "Requirements": `• Customer ID/Username:<br>• Source Account:<br>• Masked Card Number:<br>• Amount:<br>• Screenshot of error:<br>• Payment Date:<br>• Specific Cause: (Posting Delay / Batch Failure / System Timeout / Double Debit)`,
                "Template": `CM complaining about MB-Credit card settlement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Log in": {
                "Reason": `•User unable to authenticate and access the app dashboard.<br>•The customer is unable to log in to the Mobile Banking app.`,
                "Requirements": `• Customer ID/Username:<br>• Device Model & OS Version:<br>• Error message:<br>• Screenshot of error:<br>• Error Msg:<br>• Specific Cause: (Invalid Credentials / Locked User / Server Connection Fail / Bug)`,
                "Template": `CM complaining about MB-Log in a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Missing Account": {
                "Reason": `•An active CASA account is not showing up in the accounts summary.<br>•One of the customer's accounts is not visible on their Mobile Banking app dashboard.`,
                "Requirements": `• Customer ID/Username:<br>• Missing Account Number:<br>• Account No:<br>• Specific Cause: (Profile Link Error / Data Sync Delay / Backend Mapping)`,
                "Template": `CM complaining about MB-Missing Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Missing product": {
                "Reason": `•Other products (Loans/CDs/TDs) are missing from the app view.<br>•A product like a loan or CD is not being displayed on the Mobile Banking app.`,
                "Requirements": `• Customer ID/Username:<br>• Details of the missing product:<br>• Product Type:<br>• Specific Cause: (Mapping Error / Sync Failure / UI Display Bug)`,
                "Template": `CM complaining about MB-Missing product a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Reset password": {
                "Reason": `•Failure to reset the login password via the "Forgot Password" flow.<br>•The password reset function within the Mobile App is not working correctly.`,
                "Requirements": `• Customer ID/Username:<br>• Registered email/mobile:<br>• Error Msg:<br>• Specific Cause: (Link Expired / OTP Fail / Policy Violation / System Error)`,
                "Template": `CM complaining about MB-Reset password a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Service is-unavailable": {
                "Reason": `•App displays a generic "Service Unavailable" or maintenance message.<br>•The Mobile App shows a "service unavailable" or "network error" message despite a good internet connection.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot of the error:<br>• Phone Model:<br>• Time of Error:<br>• Specific Cause: (Server Downtime / Planned Maintenance / Network Issue)`,
                "Template": `CM complaining about MB-Service is-unavailable a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Showing Closed Products": {
                "Reason": `•Products closed in the past continue to appear on the app.<br>•A closed account or card is still appearing on the Mobile Banking app.`,
                "Requirements": `• Customer ID/Username:<br>• Details of the closed product:<br>• Product:<br>• Specific Cause: (Data Purge Failure / Display Cache / Status Flag Error)`,
                "Template": `CM complaining about MB-Showing Closed Products a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-App crashes": {
                "Reason": `•The application force-closes or freezes during use.<br>•The Mobile Banking application is crashing frequently upon opening or during use.`,
                "Requirements": `• Customer ID/Username:<br>• Phone Model & OS Version:<br>• Action being performed when it crashes:<br>• OS/Device:<br>• Specific Cause: (Bug in Update / OS Incompatibility / Memory Issue)`,
                "Template": `CM complaining about MB-App crashes a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB - Biometric": {
                "Reason": `•Fingerprint or FaceID login feature is not working or not available.<br>•The biometric login (fingerprint/face ID) feature for the Mobile App has stopped working.`,
                "Requirements": `• Customer ID/Username:<br>• Phone Model:<br>• Error message:<br>• Device:<br>• Specific Cause: (Sensor Error / Token Invalidated / Feature Disabled by OS)`,
                "Template": `CM complaining about MB - Biometric a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB - officer contact": {
                "Reason": `•Issue with the "Chat with Us" or "Contact Agent" feature in the app.<br>•The feature to contact a relationship officer via the Mobile App is not working.`,
                "Requirements": `• Customer ID/Username:<br>• Date of attempt:<br>• Issue:<br>• Specific Cause: (Chatbot Loop / Agent Unavailable / Message Send Fail)`,
                "Template": `CM complaining about MB - officer contact a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB - Wrong Card Number": {
                "Reason": `•The masked card number displayed does not match the physical card.<br>•The Mobile App is displaying an incorrect card number on the customer's profile.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot of the wrong card number:<br>• Card No:<br>• Specific Cause: (Reissue Update Delay / Database Error / UI Mapping Glitch)`,
                "Template": `CM complaining about MB - Wrong Card Number a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Account movements": {
                "Reason": `•Transaction history for the account is incomplete or fails to load.<br>•The transaction history for an account is not loading correctly on the Mobile App.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Screenshot of the issue:<br>• Date Range:<br>• Specific Cause: (Pagination Error / Filter Error / Missing Entry / API Timeout)`,
                "Template": `CM complaining about MB-Account movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-Beneficiaries": {
                "Reason": `•Issues adding, deleting, or managing transfer beneficiaries.<br>•The customer is unable to add or view a fund transfer beneficiary on the Mobile App.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot of the error:<br>• Beneficiary Name:<br>• Specific Cause: (Validation Error / List Full / OTP Verification Fail / Sync Error)`,
                "Template": `CM complaining about MB-Beneficiaries a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "MB-reactivate credit card": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Mishandling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lack Of Knowledge": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "ATM Machines": {
            "ATM Physical Availability": {
                "Reason": `•Issues related to physical accessibility, hardware damage, vandalism, or environmental condition of the machine.<br>•The ATM is physically damaged, out of service, or not present at its listed location.`,
                "Requirements": `• ATM ID or full location address:<br>• Description of the issue (e.g., out of service screen, broken keypad):<br>• ATM ID / Location:<br>• Date/Time:<br>• Specific Cause: (Vandalism / Broken Keypad / Screen Damaged / Dirty Premises / Inaccessible Location / Card Reader Jam)`,
                "Template": `CM complaining about ATM Physical Availability a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "ATM Electricity": {
                "Reason": `•ATM is non-operational or out of service due to power supply failure or electrical instability at the site.<br>•The ATM is not working due to a power outage at its location.`,
                "Requirements": `• ATM ID or location:<br>• Date/Time:<br>• Specific Cause: (Power Outage / Black Screen / Fluctuating Power / Machine Down / Reboot Loop)`,
                "Template": `CM complaining about ATM Electricity a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Request": {
                "Reason": `•Inquiries or proposals regarding ATM location, installation, or specific infrastructure capability requests.<br>•The customer is requesting the installation of an ATM in a new location.`,
                "Requirements": `• Suggested full address/area for new ATM:<br>• Proposed Location:<br>• Request Type:<br>• Specific Cause: (New Installation Request / Machine Relocation Request / Accessibility Feature Request / CCTV Footage Request)`,
                "Template": `CM complaining about Customer Request related to ATM a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•Discrepancy between actual account status/details and the data visualized on the ATM monitor interface.<br>•The ATM screen is displaying incorrect information, error messages, or is frozen.`,
                "Requirements": `• ATM ID or location:<br>• Screenshot/photo of the screen (if possible):<br>• Data Shown:<br>• Specific Cause: (Incorrect Balance Display / Marketing Screen Error / Wrong Language / UI Glitch)`,
                "Template": `CM complaining about Wrong Displayed Data on ATM a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "ATM Related Services": {
                "Reason": `•Malfunction of specific software features or value-added services offered via the ATM (excluding cash/deposit).<br>`,
                "Requirements": `• ATM ID #<br>• Date of transaction #<br>• Time of transaction # From (HH:MM) To (HH:MM)<br>• Type of transaction (CIB Service) as follow:<br>• -Withdrawal thru Debit card (Debit Card Number). <br>• -Withdrawal thru Credit card (Card Number).<br>• -Deposit thru Debit card (Debit Card Number).<br>• -Deposit thru Credit card (Card Number).<br>• -Cardless Deposit in Account (Account Number).<br>• -Cardless Deposit in card (Card Number).<br>• -CIB smart Wallet Cash in transaction (Phone Number). <br>• -CIB smart wallet Cash out transactions (Phone Number).<br>• Specific Cause: (PIN Change Failure / Mini Statement Unavailable / Mobile No. Update Fail / Cardless Service Error)`,
                "Template": `CM complaining about ATM Related Services a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "ATM Ambiance": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lack Of Knowledge": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Mishandling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "IVR": {
            "IVR - Welcome Message": {
                "Reason": `•Customer dissatisfaction with the initial greeting, language selection, or length of the intro.<br>•The welcome message on the IVR is incorrect, unclear, or has an issue.`,
                "Requirements": `• Calling Phone Number:<br>• Call Date/Time:<br>• Specific Cause: (Intro Too Long / Wrong Language Default / Unclear Audio / Marketing Ad Annoyance)`,
                "Template": `CM complaining about IVR - Welcome Message a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR-Tree Dissatisfaction": {
                "Reason": `•Customer finds the menu structure confusing, circular, or lacking the desired option.`,
                "Requirements": `• Date of Call :<br>• Time of Call :<br>• CP :<br>• Reason : IVR Tree<br>• Specific Cause: (Complicated Menu / Circular Loop / Missing Option / Too Many Layers)`,
                "Template": `CM complaining about IVR-Tree Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Wrong AC Linkage": {
                "Reason": `•IVR announces details of an account not belonging to the customer or fails to link correct accounts.<br>•The Interactive Voice Response (IVR) system is providing details for the wrong account.`,
                "Requirements": `• Calling Phone Number:<br>• Account Number they were trying to access:<br>• Account No:<br>• Specific Cause: (Profile Mismatch / Host Link Error / Data Mapping Error)`,
                "Template": `CM complaining about IVR - Wrong AC Linkage a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR Registration": {
                "Reason": `•Failure to register for the Phone Banking service (TPIN creation) for the first time.<br>•The customer is unable to register for the phone banking service via the IVR.`,
                "Requirements": `• Calling Phone Number:<br>• Point in the registration process where error occurs:<br>• Card No:<br>• Specific Cause: (Card Validation Fail / System Down / User Data Mismatch)`,
                "Template": `CM complaining about IVR Registration a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Card Linkage": {
                "Reason": `•Active card is not recognized or available within the IVR menu options.<br>•The IVR is not recognizing the customer's debit or credit card number.`,
                "Requirements": `• Calling Phone Number:<br>• Card Number being entered:<br>• Card No:<br>• Specific Cause: (Bin Block / Card Status Error / Profile Sync Failure)`,
                "Template": `CM complaining about IVR - Card Linkage a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Error": {
                "Reason": `•Call disconnects abruptly or system throws a generic error message during navigation.<br>•The customer is encountering a generic system error or a dead end in the IVR menu.`,
                "Requirements": `• Calling Phone Number:<br>• Point in the IVR menu where the error occurs:<br>• Step/Menu:<br>• Specific Cause: (Call Drop / System Crash / Unexpected Silence / Technical Error Msg)`,
                "Template": `CM complaining about IVR - Error a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - login": {
                "Reason": `•Authentication failure when entering TPIN or Card details to access services.<br>•The customer is unable to authenticate or log in to the phone banking service using their T-PIN.`,
                "Requirements": `• Calling Phone Number:<br>• Date & Time of attempt:<br>• ID/Card Used:<br>• Specific Cause: (Invalid TPIN / System Reject / Account Locked / Keypad Tone Issue)`,
                "Template": `CM complaining about IVR - login a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Money transfer": {
                "Reason": `•Failure to execute a fund transfer command via the phone prompts.<br>•The fund transfer service on the IVR is not working or has processed a transfer incorrectly.`,
                "Requirements": `• Calling Phone Number:<br>• Transaction details (Amount, Beneficiary):<br>• Amount:<br>• Specific Cause: (Host Timeout / Daily Limit Reached / Invalid Beneficiary / Service Unavailable)`,
                "Template": `CM complaining about IVR - Money transfer a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Password generation": {
                "Reason": `•Issue with generating or regenerating a TPIN (Telephone PIN).<br>•The customer is unable to generate a new Telephone PIN (T-PIN) through the IVR.`,
                "Requirements": `• Calling Phone Number:<br>• Mobile No:<br>• Specific Cause: (OTP Failure / Complexity Rule Reject / System Error)`,
                "Template": `CM complaining about IVR - Password generation a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Pin reset": {
                "Reason": `•Failure to reset the Debit/Credit Card PIN via the IVR automated service.<br>•The customer is unable to reset their card PIN via the IVR service.`,
                "Requirements": `• Calling Phone Number:<br>• Card Number:<br>• Card No:<br>• Specific Cause: (Validation Fail / Host Timeout / Incorrect CVV Input)`,
                "Template": `CM complaining about IVR - Pin reset a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Showing Closed Product": {
                "Reason": `•IVR announces balance or details of a product that is already closed.<br>•The IVR is providing information or options for an account or card that the customer has already closed.`,
                "Requirements": `• Calling Phone Number:<br>• Details of the closed product:<br>• Product:<br>• Specific Cause: (Database Purge Fail / Cache Error / Status Flag Mismatch)`,
                "Template": `CM complaining about Showing Closed Product on IVR a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Identification": {
                "Reason": `•System fails to identify the customer via Caller ID (CLI) or Account/Card input.<br>•The IVR system is failing to identify the customer based on their entered details.`,
                "Requirements": `• Calling Phone Number:<br>• Details being entered for verification (e.g., TPIN, DOB):<br>• Mobile No:<br>• Specific Cause: (CLI Not Recognized / Input Not Accepted / Multiple CIF Conflict)`,
                "Template": `CM complaining about IVR - Identification a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Service not available": {
                "Reason": `•Customer selects a specific service option but gets an "Unavailable" response.<br>•A specific service or menu option in the IVR is leading to a "service not available" message.`,
                "Requirements": `• Calling Phone Number:<br>• Menu option selected:<br>• Service:<br>• Specific Cause: (Maintenance Mode / Host Down / Feature Disabled)`,
                "Template": `CM complaining about IVR - Service not available a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - Cards activation": {
                "Reason": `•Unable to activate a new or replacement card through the phone system.<br>•The customer is unable to activate their new debit or credit card using the IVR.`,
                "Requirements": `• Calling Phone Number:<br>• Card Number to be activated:<br>• Card No:<br>• Specific Cause: (CVV Error / Expiry Date Error / System Reject / Card Status)`,
                "Template": `CM complaining about IVR - Cards activation a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR -Zero option not available": {
                "Reason": `•Customer is unable to reach a call center agent by pressing 0 (or designated key).<br>•The option to press '0' to speak to a customer service agent is missing or not working.`,
                "Requirements": `• Calling Phone Number:<br>• Point in IVR menu where '0' option failed:<br>• Time of Call:<br>• Specific Cause: (Queue Full / Option Removed / After Hours Restriction / Glitch)`,
                "Template": `CM complaining about IVR -Zero option not available a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "IVR - CC Settlement": {
                "Reason": `•Failure to make a Credit Card payment from account via IVR.<br>•The service to settle a credit card bill via the IVR is not working.`,
                "Requirements": `• Calling Phone Number:<br>• Card Number:<br>• Amount:<br>• Specific Cause: (Posting Delay / Insufficient Funds / Host Timeout / System Error)`,
                "Template": `CM complaining about IVR - CC Settlement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lack Of Knowledge": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "DDC": {
            "DDC - Limit Increase": {
                "Reason": `•Request to increase transaction limits via digital channel was rejected or failed.<br>•A request for a credit card limit increase submitted via Digital Banking has failed or is delayed.`,
                "Requirements": `• Customer ID/Username:<br>• Card Number:<br>• Date of request:<br>• Requested Limit:<br>• Specific Cause: (Policy Decline / System Error / Biometric Validation Fail)`,
                "Template": `CM complaining about DDC - Limit Increase a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Card Closure": {
                "Reason": `•Online request to close a card was not processed or stuck in workflow.<br>•A request to close a credit card submitted via Digital Banking has not been processed.`,
                "Requirements": `• Customer ID/Username:<br>• Card Number:<br>• Date of request:<br>• Specific Cause: (Workflow Stuck / Pending Authorization / System Glitch)`,
                "Template": `CM complaining about DDC - Card Closure a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Related Account": {
                "Reason": `•Issue regarding the visibility or linking of a related account on the profile.<br>•The customer is seeing an unfamiliar account on their Digital Banking profile.`,
                "Requirements": `• Customer ID/Username:<br>• Unfamiliar account number:<br>• Screenshot:<br>• Account No:<br>• Specific Cause: (CIF Linkage Error / Backend Sync Delay / Profile Mismatch)`,
                "Template": `CM complaining about DDC-Related Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer Confirmation": {
                "Reason": `•Failure to generate or receive the transaction receipt/confirmation (PDF/SMS/Email).<br>•The customer is not receiving SMS/email confirmations for transfers made via Digital Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Transaction details:<br>• Ref No:<br>• Specific Cause: (Email Gateway Fail / PDF Generation Error / SMS Not Received)`,
                "Template": `CM complaining about Transfer Confirmation a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Historical Request": {
                "Reason": `•User unable to retrieve archived data or past transaction history.<br>•A request for historical data made via Digital Banking has been delayed.`,
                "Requirements": `• Customer ID/Username:<br>• Date range requested:<br>• Period:<br>• Specific Cause: (Archive Retrieval Fail / Data Gap / System Timeout)`,
                "Template": `CM complaining about Historical Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP Disabled": {
                "Reason": `•The One-Time Password service is locked or disabled for the user.<br>•The customer's OTP service for Digital Banking has been disabled.`,
                "Requirements": `• Customer ID/Username:<br>• Mobile number:<br>• Specific Cause: (Security Lock / Sim Swap Suspension / Operator Issue)`,
                "Template": `CM complaining about OTP Disabled a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - SW Request": {
                "Reason": `•Failure to register or link Smart Wallet via DDC channel.<br>•A request related to the Smart Wallet made via the Digital Banking platform has failed.`,
                "Requirements": `• Customer ID/Username:<br>• Wallet No:<br>• Specific Cause: (Registration Fail / Already Linked / Data Mismatch)`,
                "Template": `CM complaining about DDC - SW Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Data Update Request": {
                "Reason": `•Request to update personal information (KYC) digitally is stuck or failed.<br>•A request to update personal data submitted via Digital Banking was not processed.`,
                "Requirements": `• Customer ID/Username:<br>• Date of request:<br>• Update Field:<br>• Specific Cause: (Document Upload Fail / Approval Delay / System Reject)`,
                "Template": `CM complaining about DDC - Data Update Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Add related Account Delay": {
                "Reason": `•The Turn Around Time (TAT) for linking a related account has been exceeded.<br>•A request to link another account to the Digital Banking profile has been delayed.`,
                "Requirements": `• Customer ID/Username:<br>• Account to be linked:<br>• Date of request:<br>• Specific Cause: (Back Office Delay / Manual Intervention Required / System Queue)`,
                "Template": `CM complaining about Add related Account Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hard Token delivery delay": {
                "Reason": `•Physical security token requested via DDC has not arrived.<br>•There is a delay in the delivery of a hard token for Digital Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Date of request:<br>• Specific Cause: (Courier Delay / Out of Stock / Order Lost)`,
                "Template": `CM complaining about Hard Token delivery delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Bill Payment": {
                "Reason": `•Failure to execute a bill payment to a utility or service provider.<br>•A bill payment made via the Digital Banking platform has failed or not been received by the biller.`,
                "Requirements": `• Customer ID/Username:<br>• Biller details:<br>• Transaction reference:<br>• Specific Cause: (Provider Down / Timeout / Biller System Error)`,
                "Template": `CM complaining about DDC - Bill Payment a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Mutual Fund": {
                "Reason": `•Error in subscribing to or redeeming mutual funds online.<br>•The customer is unable to view or transact on their Mutual Fund holdings via the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Fund Name:<br>• Specific Cause: (Cut-off Time Issue / System Error / Eligibility Check Fail)`,
                "Template": `CM complaining about DDC - Mutual Fund a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - DC Replacement": {
                "Reason": `•Request to replace Debit Card via DDC failed.<br>•A request for a Debit Card replacement made via Digital Banking has been delayed.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Date of request:<br>• Specific Cause: (Address Validation Fail / Workflow Error / System Down)`,
                "Template": `CM complaining about DDC - DC Replacement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - CC Replacement": {
                "Reason": `•Request to replace Credit Card via DDC failed.<br>•A request for a Credit Card replacement made via Digital Banking has been delayed.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Date of request:<br>• Specific Cause: (Address Validation Fail / Workflow Error / System Down)`,
                "Template": `CM complaining about DDC - CC Replacement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Change DD Account": {
                "Reason": `•Error in updating the account number for Direct Debit instructions.<br>•An online request to change the source account for a Direct Debit via Digital Banking failed.`,
                "Requirements": `• Customer ID/Username:<br>• Direct Debit details:<br>• Old/New Account:<br>• Specific Cause: (Update Failure / System Latency / Invalid Account Status)`,
                "Template": `CM complaining about DDC - Change DD Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Change DD Percentage": {
                "Reason": `•Error in modifying the repayment percentage for Direct Debit.<br>•An online request to change the percentage for a Direct Debit via Digital Banking failed.`,
                "Requirements": `• Customer ID/Username:<br>• Direct Debit details:<br>• Percentage:<br>• Specific Cause: (Parameter Update Fail / System Reject / Invalid Value)`,
                "Template": `CM complaining about DDC - Change DD Percentage a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Account opening": {
                "Reason": `•Failure to open a sub-account digitally.<br>•The customer faced a technical error while trying to open an account via the Digital Banking platform.`,
                "Requirements": `• Screenshot of the error:<br>• Account Type:<br>• Specific Cause: (E-KYC Fail / Signature Missing / Core System Sync Error)`,
                "Template": `CM complaining about DDC-Account opening a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-CD/TD Request": {
                "Reason": `•Issue with booking a Certificate of Deposit or Time Deposit online.<br>•A request to book a new CD/TD via Digital Banking was not processed correctly.`,
                "Requirements": `• Customer ID/Username:<br>• Amount, Tenor:<br>• Specific Cause: (Interest Rate Mismatch / Booking Failure / Insufficient Funds Error)`,
                "Template": `CM complaining about DDC-CD/TD Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Charity payment": {
                "Reason": `•Donation deducted from account but not acknowledged or received.<br>•The customer is facing an error while trying to make a charity payment via Digital Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Charity name:<br>• Screenshot:<br>• Charity Name:<br>• Specific Cause: (Link Failure / Settlement Delay / Receipt Missing)`,
                "Template": `CM complaining about DDC-Charity payment a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Fund transfer": {
                "Reason": `•General failure in transferring funds (Internal or External).<br>•A fund transfer initiated via Digital Banking has failed.`,
                "Requirements": `• Customer ID/Username:<br>• Transaction reference:<br>• Amount:<br>• Specific Cause: (System Timeout / Daily Limit Reached / Service Unavailable)`,
                "Template": `CM complaining about DDC-Fund transfer a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Loan Schedule": {
                "Reason": `•Loan repayment schedule not displaying or showing incorrectly.<br>•The customer is unable to view the amortization schedule for their loan on Digital Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Loan account number:<br>• Loan ID:<br>• Specific Cause: (Display Glitch / Data Retrieval Fail / PDF Download Error)`,
                "Template": `CM complaining about DDC - Loan Schedule a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC – EPP": {
                "Reason": `•Easy Payment Plan (EPP) conversion request failed online.<br>•The option to book an EPP for a credit card transaction is not working on Digital Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Transaction details:<br>• Specific Cause: (Eligibility Check Fail / System Error / Request Timed Out)`,
                "Template": `CM complaining about DDC – EPP a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Wrong Loan Balance": {
                "Reason": `•Outstanding loan balance displayed differs from actual core balance.<br>•The outstanding balance for a loan is displayed incorrectly on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Loan account number:<br>• Screenshot:<br>• Displayed Bal:<br>• Specific Cause: (Calculation Display Error / Update Delay / Core Mismatch)`,
                "Template": `CM complaining about DDC - Wrong Loan Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP Request Delay": {
                "Reason": `•OTP SMS arrives too late to be used (expired).<br>•There is a significant delay in receiving the OTP on the mobile phone when transacting on Digital Banking.`,
                "Requirements": `• Customer ID/Username:<br>• Mobile number:<br>• Time of transaction:<br>• Delay Duration:<br>• Specific Cause: (SMS Gateway Latency / Network Congestion / Provider Issue)`,
                "Template": `CM complaining about OTP Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Missing Account": {
                "Reason": `•Active account exists but is not visible on the DDC dashboard.<br>•A customer's account is missing from their Digital Banking (DDC) profile.`,
                "Requirements": `• Customer ID/Username:<br>• Missing Account Number:<br>• Account No:<br>• Specific Cause: (View Rights Issue / Host Mapping Error / Profile Sync)`,
                "Template": `CM complaining about DDC - Missing Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP Dissatisfaction": {
                "Reason": `•User unhappy with OTP experience (e.g., complexity, short validity).<br>•The customer is dissatisfied with the OTP process on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Specific feedback:<br>• Issue:<br>• Specific Cause: (Code Validity Too Short / Hard to Read / Too Many Steps)`,
                "Template": `CM complaining about OTP Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Missing CD / TD": {
                "Reason": `•Active CD or TD not appearing in the portfolio view.<br>•A Certificate of Deposit or Time Deposit is not visible on the customer's Digital Banking profile.`,
                "Requirements": `• Customer ID/Username:<br>• CD/TD details:<br>• CD Ref:<br>• Specific Cause: (Data Purge Error / Display Cache / Product Mapping)`,
                "Template": `CM complaining about DDC-Missing CD / TD a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Monthly statement": {
                "Reason": `•Unable to view or download the monthly e-statement.<br>•The customer is unable to access their monthly e-statements via the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Statement Month:<br>• Month:<br>• Specific Cause: (File Corrupted / Link Expired / Generation Failure)`,
                "Template": `CM complaining about DDC-Monthly statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-OTP Error": {
                "Reason": `•OTP entered is rejected as invalid or system throws error.<br>•The customer is not receiving the OTP required to authorize a transaction on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Mobile Number:<br>• Transaction type:<br>• Error Msg:<br>• Specific Cause: (System Out of Sync / Invalid Code / Input Error)`,
                "Template": `CM complaining about DDC-OTP Error a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Registration": {
                "Reason": `•User unable to sign up for the DDC service.<br>•The customer is facing a technical error while trying to register for Digital Banking.`,
                "Requirements": `• National ID:<br>• Screenshot of error:<br>• Error Stage:<br>• Specific Cause: (Card Validation Fail / ID Mismatch / System Down)`,
                "Template": `CM complaining about DDC-Registration a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Wrong AC Balance": {
                "Reason": `•Account balance shown on screen does not match actual funds.<br>•The balance of an account is displayed incorrectly on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Account Number:<br>• Screenshot:<br>• Displayed Bal:<br>• Specific Cause: (Cache Latency / Sync Error / Pending Trans Impact)`,
                "Template": `CM complaining about DDC - Wrong AC Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Wrong CC Balance": {
                "Reason": `•Credit Card balance/limit shown is incorrect.<br>•The balance of a credit card is displayed incorrectly on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Card Number:<br>• Screenshot:<br>• Displayed Bal:<br>• Specific Cause: (Posting Delay / Authorization Hold Error / Display Bug)`,
                "Template": `CM complaining about DDC - Wrong CC Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Missing Card Details": {
                "Reason": `•Card image or specific details (CVV/Expiry) not loading.<br>•The details for a card are missing or incomplete on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Card Type:<br>• Screenshot:<br>• Card No:<br>• Specific Cause: (Image Load Fail / Masking Error / Data Fetch Error)`,
                "Template": `CM complaining about DDC - Missing Card Details a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Wrong Displayed Name": {
                "Reason": `•Customer name shown on dashboard is incorrect or misspelled.<br>•The customer's name is displayed incorrectly on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot:<br>• Correct name:<br>• Name Shown:<br>• Specific Cause: (Data Mapping Error / Old Name Persisting / Encoding Issue)`,
                "Template": `CM complaining about DDC - Wrong Displayed Name a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Reset password": {
                "Reason": `•Failure to change or reset login password.<br>•The password reset function for Digital Banking is not working.`,
                "Requirements": `• Customer ID/Username:<br>• Registered email/mobile: <br>• Error Msg:<br>• Specific Cause: (Link Expired / OTP Fail / Policy Violation)`,
                "Template": `CM complaining about DDC-Reset password a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Showing Closed Products": {
                "Reason": `•Products closed in the past still appear on the dashboard.<br>•A closed product is still appearing on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Details of the closed product:<br>• Product:<br>• Specific Cause: (Data Purge Failure / Display Cache / Status Flag Error)`,
                "Template": `CM complaining about DDC-Showing Closed Products a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Apple Pay Registration": {
                "Reason": `•Error adding the card to Apple Wallet via DDC app.<br>•The customer is unable to provision their card for Apple Pay through the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Device type:<br>• Device:<br>• Specific Cause: (Tokenization Fail / Provisioning Error / Bank Policy Decline)`,
                "Template": `CM complaining about DDC - Apple Pay Registration a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Login": {
                "Reason": `•User unable to log in to the DDC platform.<br>•The customer is unable to log in to the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Error message:<br>• Error Msg:<br>• Specific Cause: (Invalid Credentials / Locked User / System Down)`,
                "Template": `CM complaining about DDC - Login a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Biometric": {
                "Reason": `•Fingerprint or FaceID login feature not working.<br>•The biometric login (fingerprint/face ID) for the Digital Banking app has stopped working.`,
                "Requirements": `• Customer ID/Username:<br>• Phone model:<br>• Device:<br>• Specific Cause: (Sensor Error / Token Invalidated / Feature Disabled)`,
                "Template": `CM complaining about DDC - Biometric a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - officer contact": {
                "Reason": `•Issue with "Contact Us" feature or Chatbot within DDC.<br>•The feature to contact a relationship officer via Digital Banking is not working.`,
                "Requirements": `• Customer ID/Username:<br>• Date of attempt:<br>• Issue:<br>• Specific Cause: (Chatbot Loop / Agent Unavailable / Message Send Fail)`,
                "Template": `CM complaining about DDC - officer contact a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC - Wrong Card Number": {
                "Reason": `•Card number displayed does not match physical card.<br>•The Digital Banking platform is displaying an incorrect card number.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot:<br>• Card No:<br>• Specific Cause: (Reissue Update Delay / Database Error / UI Glitch)`,
                "Template": `CM complaining about DDC - Wrong Card Number a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Account movements": {
                "Reason": `•Transaction history for account is missing or incorrect.<br>•The transaction history is not loading correctly on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Account number:<br>• Screenshot:<br>• Date Range:<br>• Specific Cause: (Pagination Error / Filter Error / Missing Entry)`,
                "Template": `CM complaining about DDC-Account movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Beneficiaries": {
                "Reason": `•Issues adding or managing transfer beneficiaries.<br>•The customer is unable to add or view a beneficiary on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Screenshot:<br>• Beneficiary Name:<br>• Specific Cause: (Validation Error / List Full / OTP Verification Fail)`,
                "Template": `CM complaining about DDC-Beneficiaries a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Credit Card Movements": {
                "Reason": `•Transaction history for credit card is missing or incorrect.<br>•The customer cannot view their credit card's transaction history on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Screenshot:<br>• Date Range:<br>• Specific Cause: (Unbilled Trans Missing / Display Error / Sort Order)`,
                "Template": `CM complaining about DDC-Credit Card Movements a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Credit card settlement": {
                "Reason": `•Payment for CC made via DDC not reflecting or failed.<br>•An attempt to pay a credit card bill via Digital Banking failed.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Amount:<br>• Payment Date:<br>• Specific Cause: (Posting Delay / Batch Failure / System Timeout)`,
                "Template": `CM complaining about DDC-Credit card settlement a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Missing credit card": {
                "Reason": `•Active Credit Card not showing on DDC dashboard.<br>•The customer's credit card is not visible on their Digital Banking profile.`,
                "Requirements": `• Customer ID/Username:<br>• Card number:<br>• Card No:<br>• Specific Cause: (View Rights Issue / Host Mapping Error / Card Status Error)`,
                "Template": `CM complaining about DDC-Missing credit card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "DDC-Missing product": {
                "Reason": `•General complaint about any missing product (Loan/Investment).<br>•A product like a loan or fund is not being displayed on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Details of the missing product:<br>• Product Type:<br>• Specific Cause: (Mapping Error / Sync Failure / UI Display Bug)`,
                "Template": `CM complaining about DDC-Missing product a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Transfer Limit": {
                "Reason": `•User unable to transfer due to hitting a limit they believe is incorrect.<br>•The customer is complaining about the per-transaction or daily transfer limit on the Digital Banking platform.`,
                "Requirements": `• Customer ID/Username:<br>• Desired limit:<br>• Amount:<br>• Specific Cause: (Daily Limit Reached / Monthly Limit Reached / Lower Limit Applied)`,
                "Template": `CM complaining about Transfer Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "UI Dissatisfaction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Mishandling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lack Of Knowledge": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        // قسم Smart Wallet الإضافي للتعداد (إذا ورد تكرار في القائمة)
        "Smart Wallet (Additions)": {
            "Wallet Unregister": {
                "Reason": `•Request to unsubscribe/delete wallet from the system.`,
                "Requirements": `• Request Date:<br>• Request Channel:<br>• Smart wallet number :""<br>• Calling Party:<br>• SD#<br>• Mobile No:<br>• Specific Cause: (Meeza Unlink Fail / Pending Balance / Process Delay)`,
                "Template": `CM complaining about Wallet Unregister a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW Wrong Activation Code": {
                "Reason": `•Activation code received is invalid or not working.`,
                "Requirements": `• Wallet Number #<br>• NID Number #<br>• Mobile Type #<br>• Android/IOS Version #<br>• Last Trial Date #<br>• Last Trial #<br>• Last Activation Code #<br>• Ticket # <br>• Code:<br>• Specific Cause: (Expired Code / System Generation Error / Typo)`,
                "Template": `CM complaining about SW Wrong Activation Code a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SW - SMS not Received": {
                "Reason": `•General failure to receive SMS alerts from wallet system.`,
                "Requirements": `• Wallet Number #<br>• Mobile network # ( Vodafone, Etisalat, Orange, WE) Please confirm with the customer if he change network or not.<br>• Mobile Type #<br>• Android/IOS Version #<br>• Last Trial Date #<br>• Last Trial Time #<br>• Ticket #<br>• Trans Type:<br>• Specific Cause: (Gateway Issue / DND Active / Network Congestion)`,
                "Template": `CM complaining about SW - SMS not Received a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            }
        },
        // حالات Not related الإضافية للقسم بالكامل
        "Not Related Cases": {
            "Alternative Online Bar Mishandling": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Online Bar CBE Relate": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Online Bar Online-Rea": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Online Bar Customer": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Online Bar Customer Req": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Online Bar Online-His": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Online Bar Online Bar": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal Unclear Cc": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal SW - Requ": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal SW - Data": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal Customer": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal Promotion": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal Good Serv": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal SW - AML/Fraud": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal SW - Undis": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal CBE Relate": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal SW - Accc": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal Customer Inq": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal Customer Req": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Smart Wal SW Favorit": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "Yes", "Related_CC_&_Not": "No" },
            "Alternative Mobile Bai MB-reacti": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Mobile Bai Customer Inq": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Mobile Bai Customer Req": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Mobile Bai Mishandlir": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative Mobile Bai Lack Of Kn": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative ATM Macf ATM Ambi": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative ATM Macf Lack Of Kn": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative ATM Macf Mishandlir": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative ATM Macf Customer": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative IVR Mishandlir": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative IVR Lack Of Kn": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative IVR Customer Req": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative IVR Customer Inq": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative DDC UI Dissatis": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative DDC Customer Inq": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative DDC Customer Req": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative DDC Mishandlir": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Alternative DDC Lack Of Kn": { "Reason": "Not relate", "Requirements": "Not relate", "Template": "Not relate", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Adding Beneficiaries": {
            "Delay in Adding beneficiaries": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Export Collection": {
            "Technical Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Branch Handling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Not-receiving DHL Number": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay Executing IC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Export LC": {
            "Technical Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Not-receiving DHL Number": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Branch Handling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay Executing IC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Import Collection": {
            "Delay Executing IC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Not-receiving Confirmation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Technical Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Branch Handling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Import LC": {
            "Technical Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Not-receiving Confirmation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Branch Handling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay Executing IC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - LG": {
            "Not-receiving Confirmation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Technical Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay Executing IC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Branch Handling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - OnlineAccount/CreditCard": {
            "Missing MM or LD on FBCC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Duplicate Account on FBCC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Credentials not received": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Balance Not-Updated on FBCC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Missing Account on FBCC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Movement Synch": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Online Demand Draft": {
            "Branch facilities Maintenance": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay in Online Demand Draft": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Online Fund Transfer": {
            "Transfer Confirmation Export": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay Executing Transaction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Rejected Transaction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Duplicate Transaction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - OTP": {
            "OTP Status Change": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Activation SMS delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Hard Token Registration Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Hard Token Device Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Hard Token delivery delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Soft Token Registration Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "OTP Request Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Password Management": {
            "Credentials not received": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Data Update": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Reset Password Issue": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Reset password Email delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Profile Creation": {
            "Delay in Add,Amend,Delete User": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "wrong user creation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong company matrix": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Missing Vasco creation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "fees deducted by mistake": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay in profile creation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delaying in adding users": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delaying in deleting users": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Secure Email": {
            "Wrong reply": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong direction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay Executing Secure Email": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS Related": {
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "GTS application request delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Cheque Book Request": {
            "Delay/Reject Trx": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Historical Statements": {
            "Missing Statement": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - Credit Card Settlement": {
            "Delay/Reject Trx": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS": {
            "Transfer List Update": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lack Of Knowledge": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Mishandling": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "GTS Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "GTS - CPS": {
            "CPS Registration Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Apple Pay": {
        "Apple pay": {
            "ATM Withdrawal": {
                "Reason": `•The customer is unable to perform a contactless cash withdrawal at an ATM using Apple Pay.`,
                "Requirements": `• Masked Card Number used in Wallet:<br>• ATM Location & Owning Bank:<br>• Date & Time of attempt:<br>• Error message on the ATM:`,
                "Template": `CM complaining about ATM Withdrawal a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Adding Issue": {
                "Reason": `•The customer receives an error message when trying to add their card to Apple Wallet.`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about Card Adding Issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP SMS Delay": {
                "Reason": `•There is a significant delay in receiving the OTP via SMS required to verify the card for Apple Wallet.`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about OTP SMS Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Adding Eligibility": {
                "Reason": `•The customer is being told their card is ineligible for Apple Pay, even though they believe it should be supported.`,
                "Requirements": `• Masked Card Number:<br>• Card Type/Product Name:`,
                "Template": `CM complaining about Card Adding Eligibility a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Transaction Notification Delay": {
                "Reason": `•The customer is not receiving real-time push notifications after completing a transaction with Apple Pay.`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about Transaction Notification Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Tokenized Trx Rejection": {
                "Reason": `•A transaction made using Apple Pay at a merchant's contactless terminal was rejected.`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about Tokenized Trx Rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Card/Tokenized Status Related": {
                "Reason": `•The card appears as "suspended" or "inactive" within the Apple Wallet, and the customer cannot use it.`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about Card/Tokenized Status Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "SEID Related": {
                "Reason": `•For Red Flow Apple pay`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about SEID Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Transaction History Issue": {
                "Reason": `•The transaction history shown in the Apple Wallet app is incomplete, inaccurate, or not updating.`,
                "Requirements": `• Cm number # :<br>• Sema# (For Credit Card):<br>• Masked Card Number :<br>• Device Model:<br>• iOS Version:<br>• Date of trial:<br>• Time stamp:<br>• SD Ticket :<br>• SEID# (Device ID):<br>• Mobile # :<br>• Calling Party:`,
                "Template": `CM complaining about Transaction History Issue a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Cash Charge Back": {
        "Transactions": {
            "Debit card": {
                "Reason": `•ATM debited the account but did not dispense cash correctly.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Missing Amount:<br>• ATM Machine ID/Location:`,
                "Template": `CM complaining about Debit card transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Smart wallet": {
                "Reason": `•ATM withdrawal debited but cash not dispensed.`,
                "Requirements": `• Smart Wallet Mobile Number:<br>• Transaction Date & Time:<br>• Missing Amount:<br>• ATM Machine ID/Location:`,
                "Template": `CM complaining about Smart wallet transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Prepaid Card": {
                "Reason": `•ATM debited the card but did not dispense cash.`,
                "Requirements": `• Masked Prepaid Card Number:<br>• Transaction Date & Time:<br>• Missing Amount:<br>• ATM Machine ID/Location:`,
                "Template": `CM complaining about Cash Prepaid Card transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        }
    },
    "Charge Back": {
        "Transactions": {
            "ATM": {
                "Reason": `•Customer made withdrawal dispute from Non CIB ATM.`,
                "Requirements": `• Account #/Credit Card Acc #:<br>• Masked Card#:<br>• Transaction date & time:<br>• Transaction amount:`,
                "Template": `CM complaining about ATM withdrawal dispute from Non CIB ATM`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "POS": {
                "Reason": `•The customer is disputing a POS transaction.`,
                "Requirements": `• Account #/Credit Card Acc #:<br>• Masked Card#:<br>• Transaction date & time:<br>• Transaction amount:`,
                "Template": `CM complaining about POS transaction dispute`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Prepaid Card": {
                "Reason": `•The customer is disputing a transaction on their prepaid card.`,
                "Requirements": `• Masked Card#:<br>• Transaction date & time:<br>• Amount:<br>• Reason Of Dispute: (Select from list)`,
                "Template": `CM complaining about Prepaid Card transaction dispute`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Credit Card": {
                "Reason": `•The customer is disputing a transaction on their credit card.`,
                "Requirements": `• Masked Card#:<br>• Transaction date & time:<br>• Amount:<br>• Reason Of Dispute: (Select from list)`,
                "Template": `CM complaining about Credit Card transaction dispute`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit Card": {
                "Reason": `•The customer is disputing a transaction on their debit card.`,
                "Requirements": `• Masked Card#:<br>• Transaction date & time:<br>• Amount:<br>• Reason Of Dispute: (Select from list)`,
                "Template": `CM complaining about Debit Card transaction dispute`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        }
    },
    "Banking Services": {
        "CIB Service": {
            "Network Instability": {
                "Reason": `•Intermittent system connectivity or slowness affecting service delivery in branches/channels.`,
                "Requirements": `• Customer ID/Username:<br>• Service being used (App, IB):<br>• Date & Time of issue:<br>• Error message text (if any):<br>• Location/Branch:<br>• Time of Incident:`,
                "Template": `CM complaining about Network Instability a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "New Year Wealth Gift / Package": {
                "Reason": `•Dissatisfaction with the annual Wealth segment gift (eligibility, quality, or non-receipt).`,
                "Requirements": `• Customer Name & ID:<br>• Relationship Manager's Name:<br>• Details of the gift issue:<br>• Customer Segment:`,
                "Template": `CM complaining about New Year Wealth Gift / Package a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Contact Center verification": {
                "Reason": `•Customer failed the security verification process (IVR or Agent) and was denied service.`,
                "Requirements": `• Calling Phone Number:<br>• Date & Time of Call:<br>• Information that was not accepted:`,
                "Template": `CM complaining about Contact Center verification a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Deposit": {
                "Reason": `•General issues regarding cash deposit services at the teller counter.`,
                "Requirements": `• Branch Name:<br>• Date & Time of Visit:<br>• Amount:<br>• Specific Cause: (Teller Refusal / System Down / long queue / teller attitude)`,
                "Template": `CM complaining about Cash Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Cash Banknotes": {
                "Reason": `•Customer claims cash received was short (discovered after leaving the counter/ATM).`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Date & Time of Withdrawal:<br>• Teller ID/Stamp:<br>• Amount Missing:<br>• Shortage Amount:`,
                "Template": `CM complaining about Missing Cash Banknotes a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Branch facilities Maintenance": {
                "Reason": `•Complaints about the physical condition of the branch (AC, Cleanliness, Seating).`,
                "Requirements": `• Branch Name:<br>• Date of Visit:<br>• Specific Cause: (AC not working / dirty / broken furniture)`,
                "Template": `CM complaining about Branch facilities Maintenance a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Sales Approach": {
                "Reason": `•Customer felt pressured, misled, or annoyed by the sales tactics of bank staff.`,
                "Requirements": `• Branch/Location:<br>• Date of interaction:<br>• Name/Description of Staff:<br>• Product being offered/sold:`,
                "Template": `CM complaining about Sales Approach a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "lack of security restrictions": {
                "Reason": `•Customer perceived a lack of privacy or security measures inside the branch.`,
                "Requirements": `• Branch/Channel Name:<br>• Description of the security concern:<br>• Date of observation:`,
                "Template": `CM complaining about lack of security restrictions a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fake Notes / Unfit Money": {
                "Reason": `•Customer alleges withdrawing counterfeit or damaged/soiled banknotes from the bank.`,
                "Requirements": `• Channel (Branch/ATM Location):<br>• Date of Withdrawal:<br>• Amount of suspect notes:<br>• Source (ATM/Teller):`,
                "Template": `CM complaining about Fake Notes / Unfit Money a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "System Outage": {
                "Reason": `•Total unavailability of banking systems preventing any transactions.`,
                "Requirements": `• Branch Name/Channel affected:<br>• Date & Time of outage:<br>• Transaction they were trying to perform:`,
                "Template": `CM complaining about System Outage a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wealth Gift delivery delay": {
                "Reason": `•The promised Wealth segment gift has exceeded the delivery timeline.`,
                "Requirements": `• Customer Name & ID:<br>• Name of the gift:<br>• Promised delivery date:`,
                "Template": `CM complaining about Wealth Gift delivery delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Internet Banking Dissatisfactn": {
                "Reason": `•General negative feedback regarding the Online Banking user experience (UX).`,
                "Requirements": `• Customer ID/Username:<br>• Specific feedback or reason for dissatisfaction:`,
                "Template": `CM complaining about Internet Banking Dissatisfactn a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Concierge Service": {
                "Reason": `•Complaints regarding third-party lifestyle management services offered to VIPs.`,
                "Requirements": `• Customer Name & ID:<br>• Date of request:<br>• Service Requested:<br>• Description of the issue:`,
                "Template": `CM complaining about Concierge Service a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Website Issues": {
                "Reason": `•Technical errors or broken links on the public bank website (cibeg.com).`,
                "Requirements": `• Website URL/Page address:<br>• Description of the issue:<br>• Screenshot of the issue:`,
                "Template": `CM complaining about Website Issues a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Branch Working Hours": {
                "Reason": `•Dissatisfaction with opening/closing times or early closure.`,
                "Requirements": `• Branch Name:<br>• Date and Time of Visit:<br>• Branch Location:`,
                "Template": `CM complaining about Branch Working Hours a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Suggestion": {
                "Reason": `•Customer providing positive feedback or ideas for improvement.`,
                "Requirements": `• Detailed description of the suggestion:<br>• Topic/Product:`,
                "Template": `CM complaining about Suggestion a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Complaint TAT": {
                "Reason": `•Previous complaint resolution took longer than the committed Turn Around Time.`,
                "Requirements": `• Original Complaint SR Number:<br>• Date complaint was filed:<br>• Promised TAT:<br>• Previous Case Ref:`,
                "Template": `CM complaining about Complaint TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Complaint Feedback Delay": {
                "Reason": `•Customer not updated on the status of an ongoing complaint.`,
                "Requirements": `• Original Complaint SR Number:<br>• Case Ref:`,
                "Template": `CM complaining about Complaint Feedback Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hotline busy tone": {
                "Reason": `•Inability to reach the Call Center due to line congestion or technical disconnects.`,
                "Requirements": `• Calling Phone Number:<br>• Dates & Times of attempts:`,
                "Template": `CM complaining about Hotline busy tone a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Weekend related services": {
                "Reason": `•Issues specifically occurring during weekend shifts or 24/7 branches.`,
                "Requirements": `• Specific service needed:<br>• Branch/Service location:`,
                "Template": `CM complaining about Weekend related services a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wealth Gift Related": {
                "Reason": `•General inquiries or disputes about the type/nature of the Wealth gift.`,
                "Requirements": `• Customer Name & ID:<br>• Details of the gift:<br>• Gift Type:`,
                "Template": `CM complaining about Wealth Gift Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Website - Fund Price Update": {
                "Reason": `•Mutual Fund prices displayed on the public website are outdated.`,
                "Requirements": `• Fund Name:<br>• Website page URL:`,
                "Template": `CM complaining about Website - Fund Price Update a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Website - Fees Update": {
                "Reason": `•Tariff and charges sheet on the website is not reflecting current rates.`,
                "Requirements": `• Name of Fee or Charge:<br>• Website page URL:`,
                "Template": `CM complaining about Website - Fees Update a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Website Security Update": {
                "Reason": `•Browser security warnings or SSL certificate issues on the bank's site.`,
                "Requirements": `• Website page URL:<br>• Description of the security warning:<br>• Browser:`,
                "Template": `CM complaining about Website Security Update a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Complaint Closure": {
                "Reason": `•Complaint marked as "Resolved" while the issue persists or wasn't fixed.`,
                "Requirements": `• Original Complaint SR Number:<br>• Reason for dissatisfaction:<br>• Case Ref:`,
                "Template": `CM complaining about Wrong Complaint Closure a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Third Party Communication": {
                "Reason": `•Issues with outsourced agencies (Collections, Couriers, Marketing).`,
                "Requirements": `• Name of the Third-party Company:<br>• Date of interaction:<br>• Agency Type:`,
                "Template": `CM complaining about Third Party Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Teller Withdrawal Missing Amt.": {
                "Reason": `•Cash counted at the teller counter was less than the withdrawal slip amount.`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Teller ID/Stamp:<br>• Amount Diff:`,
                "Template": `CM complaining about Teller Withdrawal Missing Amt. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Teller Deposit Missing Amt.": {
                "Reason": `•Dispute over the amount handed to the teller vs. amount credited.`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Teller ID/Stamp:<br>• Amount Diff:`,
                "Template": `CM complaining about Teller Deposit Missing Amt. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Quematic Related Issues": {
                "Reason": `•Issues with the queue management system (Ticket machine).`,
                "Requirements": `• Branch Name:<br>• Date of Visit:<br>• Specific Cause: (Machine Broken / ticket paper out)`,
                "Template": `CM complaining about Quematic Related Issues a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "FX Related": {
                "Reason": `•Availability of foreign currency or exchange rates offered in branch.`,
                "Requirements": `• Branch Name:<br>• Date of Transaction:<br>• Currency:`,
                "Template": `CM complaining about FX Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Action Taken": {
                "Reason": `•The resolution applied to a previous request/complaint was incorrect.`,
                "Requirements": `• Account Number:<br>• Customer's original instruction:<br>• Incorrect action taken:<br>• Case Ref:`,
                "Template": `CM complaining about Wrong Action Taken a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "ChatBot Update": {
                "Reason": `•The AI Chatbot provided outdated or incorrect information.`,
                "Requirements": `• Question asked to ChatBot:<br>• Query Topic:`,
                "Template": `CM complaining about ChatBot Update a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dropped Calls": {
                "Reason": `•Calls with customer service agents disconnecting mid-conversation.`,
                "Requirements": `• Calling Phone Number:<br>• Approximate Date & Time:`,
                "Template": `CM complaining about Dropped Calls a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "International Calls": {
                "Reason": `•Issues connecting to the bank from an international number.`,
                "Requirements": `• Calling Phone Number:<br>• Country:`,
                "Template": `CM complaining about International Calls a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong SMS": {
                "Reason": `•SMS alert received contains incorrect data or text.`,
                "Requirements": `• Customer Mobile Number:<br>• SMS Content:`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Voucher Complaint": {
                "Reason": `•Issues redeeming or receiving digital vouchers (Loyalty/Campaigns).`,
                "Requirements": `• Merchant Name :<br>• Voucher Value:`,
                "Template": `CM complaining about E-Voucher Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Attitude": {
                "Reason": `•Staff behavior perceived as rude, unhelpful, or unprofessional.`,
                "Requirements": `• Branch Name :<br>• Staff Name/Role:`,
                "Template": `CM complaining about Attitude a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "AXA Complaint": {
                "Reason": `•Issues related to insurance products sold through the bank.`,
                "Requirements": `• Account/Card:<br>• Copy From the Deduction :`,
                "Template": `CM complaining about AXA Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Contact Center Queue": {
                "Reason": `•Excessive waiting time on hold before reaching an agent.`,
                "Requirements": `• Calling Party :<br>• Date of call:`,
                "Template": `CM complaining about Contact Center Queue a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Branch Queue": {
                "Reason": `•Excessive waiting time in the physical branch line.`,
                "Requirements": `• Date of visit #<br>• Branch Name #`,
                "Template": `CM complaining about Branch Queue a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Not-available": {
                "Reason": `•Branch or Teller unable to provide requested cash amount.`,
                "Requirements": `• Branch #<br>• Amount/Currency:`,
                "Template": `CM complaining about Cash Not-available a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related في CIB Service
            "Digital Transformation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Overseas Application Issue": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Copons Not-Added": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Canceled case": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Duplicated case": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "FCY Allocation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Documents/App. Availability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Facebook Page Issues": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Air Conditioning Issue": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Printer Issue": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "System Instability - Branches": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "ACH Portal Accessability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Missing Required Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "FX Allocation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "HR Related Complaints": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "FX": {
            "Unsuccessful FX Transaction": {
                "Reason": `•Customer made FX on ATM CIB but didn't receive any amount from ATM and amount deducted.`,
                "Requirements": `• Masked credit card:<br>• Machine Number:<br>• Date: DD/MM/YYYY<br>• Amount:<br>• Currency:<br>• Missing Amount:`,
                "Template": `Customer complain from Incomplete FX Transaction`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Dispensed Transaction": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Branch Transformation": {
            "Salary Certificate delay": {
                "Reason": `•Request for a certificate verifying salary transfer has exceeded SLA.`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Date of Request:<br>• Employer Name:`,
                "Template": `CM complaining about Salary Certificate delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Balance Certificate delay": {
                "Reason": `•The official letter confirming account balance was not issued within timeframe.`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Date of Request:<br>• Account No:`,
                "Template": `CM complaining about Balance Certificate delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Pension Certificate delay": {
                "Reason": `•Delay in issuing a certificate verifying pension income.`,
                "Requirements": `• Account Number:<br>• Branch Name:<br>• Date of Request:<br>• Pension Authority:`,
                "Template": `CM complaining about Pension Certificate delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Account Referral": {
                "Reason": `•Account is placed under "Referral" status (Hold), restricting transactions.`,
                "Requirements": `• Referrer's Name:<br>• Account Status:<br>• Referral Date:<br>• Specific Cause: (reward not received)`,
                "Template": `CM complaining about Account Referral a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related في Branch Transformation
            "commutation letter to cust": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Debit/Credit Advice Letter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Inheritance Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Export Transaction Credit Adv": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "BB Account Referral": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Underformation Certificate": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "POS": {
            "Delay in POS installation": {
                "Reason": `•The request to install a new POS terminal has exceeded SLA.`,
                "Requirements": `Terminal ID / Merchant ID :<br>Merchant name:<br>Date of the the request :`,
                "Template": `CM complaining about Delay in POS installation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "POS Performance": {
                "Reason": `•The POS terminal is malfunctioning, slow, or facing connectivity issues.`,
                "Requirements": `Terminal ID / Merchant ID :<br>Merchant name:<br>Vendor Name :<br>Brief of the issue :`,
                "Template": `CM complaining about POS Performance a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "POS commission": {
                "Reason": `•Merchant disputes the Merchant Discount Rate (MDR) or fees deducted.`,
                "Requirements": `Merchant Name :<br>Merchant Branch Name / Address :<br>Date of Incident :`,
                "Template": `CM complaining about POS commission a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        },
        "Trade Finance": {
            "IDC Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "LC Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "LG Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Fraud Investigation": {
        "Cards": {
            "Card Not Present": {
                "Reason": `Customer complaining from ecommerce Transactions (online payments).`,
                "Requirements": `• Account #/Credit Card Acc #:<br>• Masked Card#:<br>• Transaction date & time:<br>• Transaction amount:`,
                "Template": `Customer complaining from ecommerce Transactions (online payments)`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "OTP SMS without transactions": {
                "Reason": `Customer complaining from receiving OTP SMS without attempting to make payment.`,
                "Requirements": `• Account #/Credit Card Acc #:<br>• Masked Card#:<br>• Date & Time of SMS:`,
                "Template": `Customer complaining from receiving OTP SMS without attempting to make payment`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Physical Card Lost/Stolen Abroad": {
                "Reason": `Customer has his card lost or stolen outside Egypt ONLY.`,
                "Requirements": `• Masked Card#:<br>• Date & Time of loss:<br>• Country:`,
                "Template": `Customer has his card lost or stolen outside Egypt ONLY`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Scam-Related Authorized Trans.": {
                "Reason": `Customer complaining from approved transactions (Scam/Phishing).`,
                "Requirements": `• Masked Card#:<br>• Date & Time:<br>• Amount:<br>• Type of Scam (Vishing/Phishing link):`,
                "Template": `Customer complaining from scam-related approved transactions`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Unauthorized Apple Pay Trans.": {
                "Reason": `Customer complaining from unauthorized transactions done using apple pay wallet.`,
                "Requirements": `• Masked Card#:<br>• Transaction date & time:<br>• Amount:`,
                "Template": `Customer complaining from unauthorized transactions done using apple pay wallet`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Unsuccessful Fraud Attempt": {
                "Reason": `Customer complaining from transactions or verification trials that declined.`,
                "Requirements": `• Masked Card#:<br>• Date & Time:<br>• Merchant Name:`,
                "Template": `Customer complaining from declined fraudulent attempts`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        },
        "Digital Banking": {
            "Unauthorized IB Transfers": {
                "Reason": `Phishing leads to unauthorized IB fund transfers.`,
                "Requirements": `• Account #:<br>• Date & Time:<br>• Amount:<br>• Beneficiary Details:`,
                "Template": `Customer complaining from unauthorized fund transfers via Internet Banking`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Unauthorized IPN Transfers": {
                "Reason": `Customer complaining about money transfers through Instapay.`,
                "Requirements": `• Account #:<br>• Date & Time:<br>• Amount:<br>• IPN Ref No:`,
                "Template": `Customer complaining about unauthorized transfers through Instapay`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        }
    },
    "Funds": {
        "Offshore Investment": {
            "Product recommendation.": {
                "Reason": `•Customer claims offshore investment advice was unsuitable.`,
                "Requirements": `• Investment Account Number:<br>• Product Name:<br>• RM Name:<br>• Recommendation Date:`,
                "Template": `CM complaining about Product recommendation. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Online banking.": {
                "Reason": `•Issues viewing or managing offshore portfolio via portal.`,
                "Requirements": `• Investment Account Number:<br>• Customer ID/Username:<br>• Screenshot:`,
                "Template": `CM complaining about Online banking. a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Statement delay.": {
                "Reason": `•Offshore holdings statement not delivered.`,
                "Requirements": `• Investment Account Number:<br>• Period:`,
                "Template": `CM complaining about Statement delay. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Product sales charges.": {
                "Reason": `•Dispute regarding entry loads or management fees.`,
                "Requirements": `• Investment Account Number:<br>• Product Name:<br>• Fee Amount:`,
                "Template": `CM complaining about Product sales charges. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Certificate request delay.": {
                "Reason": `•Delay in issuing physical proof of ownership.`,
                "Requirements": `• Investment Account Number:<br>• Name of Security:<br>• Request Date:`,
                "Template": `CM complaining about Certificate request delay. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Gain/Loss Misleading Info": {
                "Reason": `•Discrepancy between reported value and actual performance.`,
                "Requirements": `• Product Name:<br>• RM Name:<br>• Reported vs Actual:`,
                "Template": `CM complaining about Gain/Loss Misleading Info a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Redemption proceeds delay": {
                "Reason": `•Proceeds from selling offshore assets delayed.`,
                "Requirements": `• Product Name:<br>• Settlement Date:<br>• Trade Date:`,
                "Template": `CM complaining about Redemption proceeds delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Product features Mislead info": {
                "Reason": `•Misinformed about liquidity or risk terms.`,
                "Requirements": `• Product Name:<br>• RM Name:<br>• Feature:`,
                "Template": `CM complaining about Product features Mislead info a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Transaction execution delay": {
                "Reason": `•Buy/Sell order not executed at desired time.`,
                "Requirements": `• Product Name:<br>• Order Date:`,
                "Template": `CM complaining about Transaction execution delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mutual funds dividends delay": {
                "Reason": `•Cash dividends from offshore funds not credited.`,
                "Requirements": `• Fund Name:<br>• Pay Date:`,
                "Template": `CM complaining about Mutual funds dividends delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fixed income sec coupons delay": {
                "Reason": `•Interest coupons for offshore bonds not received.`,
                "Requirements": `• Security Name/ISIN:<br>• Coupon Date:`,
                "Template": `CM complaining about Fixed income sec coupons delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related في Offshore
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Others.": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Certified invest. consultant": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Service provided.": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Call back.": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong advice address": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Confirmation advice delay.": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong statement address": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lack in regular portfolio": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Osoul": {
            "Fund Request Delay": {
                "Reason": `•Delay in subscription or redemption requests for Osoul Fund units.`,
                "Requirements": `• Client Account Number:<br>• Request Type:<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Request": {
                "Reason": `•General service request related to Osoul fund investment.`,
                "Requirements": `• Client Account Number:<br>• Request Type:`,
                "Template": `CM complaining about Customer Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mutual fund Complaint": {
                "Reason": `•Dissatisfaction with Osoul Fund's performance, ROI, or fees.`,
                "Requirements": `• Client Account Number:<br>• Issue:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Aman": {
            "Mutual fund Complaint": {
                "Reason": `•General dispute regarding the Aman Mutual Fund's performance or dividends.`,
                "Requirements": `• Client Account Number:<br>• Fund Name:<br>• Issue Date:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fund Request Delay": {
                "Reason": `•Delay in processing a subscription or redemption request for the Aman fund.`,
                "Requirements": `• Client Account Number:<br>• Request Type (Sub/Red):<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Istethmar": {
            "Mutual fund Complaint": {
                "Reason": `•Dissatisfaction with Istethmar Fund's performance, ROI, or admin fees.`,
                "Requirements": `• Client Account Number:<br>• Issue:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fund Request Delay": {
                "Reason": `•A subscription or redemption request for the Istethmar fund has been delayed.`,
                "Requirements": `• Client Account Number:<br>• Request Type:<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Hemaya": {
            "Fund Request Delay": {
                "Reason": `•Delay in executing the subscription or redemption of Hemaya fund units.`,
                "Requirements": `• Client Account Number:<br>• Request Type:<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mutual fund Complaint": {
                "Reason": `•General dissatisfaction regarding the Hemaya fund's returns or fees.`,
                "Requirements": `• Client Account Number:<br>• Issue Date:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Thabat": {
            "Mutual fund Complaint": {
                "Reason": `•Dissatisfaction with Thabat (Fixed Income) Fund's yields or distributions.`,
                "Requirements": `• Client Account Number:<br>• Issue:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fund Request Delay": {
                "Reason": `•A subscription or redemption request for the Thabat fund has been delayed.`,
                "Requirements": `• Client Account Number:<br>• Request Type:<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Misr ElMostakbal": {
            "Mutual fund Complaint": {
                "Reason": `•General dissatisfaction with Misr ElMostakbal Fund's performance or ROI.`,
                "Requirements": `• Client Account Number:<br>• Issue:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fund Request Delay": {
                "Reason": `•A subscription or redemption request for the Misr ElMostakbal fund has been delayed.`,
                "Requirements": `• Client Account Number:<br>• Request Type:<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Takamol": {
            "Fund Request Delay": {
                "Reason": `•Delay in processing subscription or redemption requests for Takamol Fund units.`,
                "Requirements": `• Client Account Number:<br>• Request Type:<br>• Request Date:`,
                "Template": `CM complaining about Fund Request Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mutual fund Complaint": {
                "Reason": `•Dissatisfaction with Takamol Fund's performance or equity results.`,
                "Requirements": `• Client Account Number:<br>• Issue:`,
                "Template": `CM complaining about Mutual fund Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "InstaPay": {
        "Transfer Delay": {
            "Bill Payment": {
                "Reason": `•Payment to a utility biller via InstaPay was debited, but the payment is not reflected with the biller.`,
                "Requirements": `• Biller Name:<br>• Trans Ref (IPN Ref):<br>• Amount:`,
                "Template": `CM complaining about Bill Payment a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delay in Send to other A/C": {
                "Reason": `•A fund transfer sent to another bank account via InstaPay was debited but not credited instantly.`,
                "Requirements": `• Beneficiary Bank:<br>• IPN Ref No:<br>• Amount:`,
                "Template": `CM complaining about Delay in Send to other A/C a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Joint Account": {
                "Reason": `•An InstaPay transaction involving a joint account has failed or been delayed.`,
                "Requirements": `• Joint Account Number:<br>• Reference Number:`,
                "Template": `CM complaining about Joint Account a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delay in sending to Wallet": {
                "Reason": `•Transfer to an Electronic Wallet (Vodafone, Orange, etc.) deducted but not credited.`,
                "Requirements": `• Beneficiary ( Wallet) :<br>• Reference Number:`,
                "Template": `CM complaining about Delay in sending to Wallet a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delay in sending to other A/C": {
                "Reason": `•Transfer to another bank account pending confirmation or settlement.`,
                "Requirements": `• Beneficiary Account :<br>• Reference Number:`,
                "Template": `CM complaining about Delay in sending to other A/C a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delay in sending to Meeza": {
                "Reason": `•Transfer to a Meeza Digital Card (Prepaid/Debit) failed to credit instantly.`,
                "Requirements": `• Card Number:<br>• Reference Number:`,
                "Template": `CM complaining about Delay in sending to Meeza a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related في Transfer Delay
            "Delay in Receiving into A/C": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay in Receiving to Meeza": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Delay in Receiving to wallet": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Subscription": {
            "Subscription": {
                "Reason": `•Issues during the onboarding/registration process (Linking Mobile to Bank Account).`,
                "Requirements": `• SD#<br>• Time and date: <br>• Customer registered mobile number :<br>• Network Provider :<br>• Calling Party: `,
                "Template": `CM complaining about Subscription a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            }
        },
        "Customer Inquiry": {
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Customer Request": {
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "POS.": {
        "POS - Hardware": {
            "Paper Roll": {
                "Reason": `•The merchant has run out of paper rolls for their POS machine.`,
                "Requirements": `• Terminal ID (TID):<br>• Request Date:`,
                "Template": `CM complaining about Paper Roll a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "POS condition": {
                "Reason": `•The physical condition of the POS machine is poor (e.g., broken buttons, damaged screen).`,
                "Requirements": `• Terminal ID (TID):<br>• Issue Details:`,
                "Template": `CM complaining about POS condition a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Magnetic reader error": {
                "Reason": `•The POS machine is failing to read the magnetic stripe on cards.`,
                "Requirements": `• Terminal ID (TID):<br>• Error Msg:`,
                "Template": `CM complaining about Magnetic reader error a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Smart reader chip error": {
                "Reason": `•The POS machine is failing to read the chip on smart cards.`,
                "Requirements": `• Terminal ID (TID):<br>• Error Msg:`,
                "Template": `CM complaining about Smart reader chip error a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hardware Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "POS - Software": {
            "Communication": {
                "Reason": `•The POS machine is showing a "Communication Error" and cannot connect.`,
                "Requirements": `• Terminal ID (TID):<br>• Conn Type:`,
                "Template": `CM complaining about Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Network SIM failure": {
                "Reason": `•The POS machine is unable to connect to the GPRS network due to a SIM card failure.`,
                "Requirements": `• Terminal ID (TID):<br>• Network Provider:`,
                "Template": `CM complaining about Network SIM failure a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Application error": {
                "Reason": `•The POS machine's software is freezing, crashing, or showing an error code.`,
                "Requirements": `• Terminal ID (TID):<br>• Error Code:`,
                "Template": `CM complaining about Application error a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        },
        "POS": {
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Social Media": {
        "Internet Banking": {
            "Inquires": {
                "Reason": `•General inquiries regarding Internet Banking received via Social Media.`,
                "Requirements": `• Platform (FB/X/IG):<br>• Customer Handle:`,
                "Template": `CM complaining about Inquires a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        }
    },
    "Deposits": {
        "CD": {
            "Interest Not-added": {
                "Reason": `•Interest payout due date has passed but the amount was not credited to the account.<br>•The interest earned on the Certificate of Deposit (CD) was not credited to the linked account upon maturity or interest payment date.`,
                "Requirements": `• CD Account Number:<br>• Linked Account Number:<br>• Maturity/Interest Payment Date:<br>• Expected Interest Amount:<br>• CD Ref No:<br>• Due Date:<br>• Specific Cause: (System Failure / Cycle Mismatch / Account Block / Holiday Delay)`,
                "Template": `CM complaining about Interest Not-added a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "CD New Interest Calculation": {
                "Reason": `•Dispute regarding the interest rate applied to a newly issued or rolled-over CD.<br>•The customer is complaining about the interest calculation on a new type of CD or a recent change in calculation method.`,
                "Requirements": `• CD Account Number:<br>• Date of Booking:<br>• Specific question about the new calculation:<br>• CD Ref No:<br>• Rate Applied:<br>• Specific Cause: (Tier Mismatch / Wrong Rate Sheet / System Mapping Error)`,
                "Template": `CM complaining about CD New Interest Calculation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Collateral Release": {
                "Reason": `•Delay in releasing the hold (Lien) on a CD after the secured loan/card has been settled.<br>•A CD held as collateral against a loan has matured or the loan is settled, but the lien has not been removed.`,
                "Requirements": `• CD Account Number:<br>• Loan Account Number that was secured:<br>• Date of Loan Settlement:<br>• SR Number for release request (if any):<br>• Loan/Card Ref:<br>• Settlement Date:<br>• Specific Cause: (Manual Release Failure / System Sync Issue / Outstanding Fees)`,
                "Template": `CM complaining about Collateral Release a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products design": {
                "Reason": `•Customer dissatisfaction with the structure of the CD product (Tenure, Payout frequency, Currency).<br>•The customer is providing negative feedback on the design or structure of a CD product.`,
                "Requirements": `• CD Product Name:<br>• Specific feedback on the product design:<br>• Product Name:<br>• Specific Cause: (Lack of Flexibility / Tenure Gaps / Payout Frequency Issue)`,
                "Template": `CM complaining about Products design a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "CD Renewal Process": {
                "Reason": `•Issues encountered during the renewal of the certificate (Auto-renewal vs Manual).<br>•The customer has a complaint about the CD renewal process (e.g., lack of notification, difficulty in providing instructions).`,
                "Requirements": `• CD Account Number:<br>• Maturity Date:<br>• Description of the procedural issue:<br>• CD Ref No:<br>• Specific Cause: (Instruction Ignored / System Error / Wrong Renewal Term)`,
                "Template": `CM complaining about CD Renewal Process a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•CD details (Rate, Maturity, Amount) shown incorrectly on Digital Channels.<br>•Incorrect data related to the CD (e.g., principal amount, interest rate, maturity date) is displayed on digital channels.`,
                "Requirements": `• CD Account Number:<br>• Channel (IB, App, Statement):<br>• Description of incorrect data:<br>• Screenshot (if possible):<br>• Channel:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to answer inquiries regarding CD features, penalties, or rates.<br>•A bank employee provided incorrect information about CD features, rates, or procedures.`,
                "Requirements": `• CD Account Number:<br>• Branch/Department:<br>• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Question asked and incorrect information provided:<br>• Specific Cause: (Training Gap / Wrong Guidance / Info Unavailable)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Operational error by staff during booking or servicing the CD.<br>•A bank employee mishandled a request related to the customer's CD (e.g., booking, redemption).`,
                "Requirements": `• CD Account Number:<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Detailed description of the incident:<br>• Incident:<br>• Specific Cause: (Data Entry Error / Wrong Account Debited / Process Violation)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "CD Rate Objection": {
                "Reason": `•Customer unsatisfied with the interest rate offered compared to market/competitors.<br>•The customer is objecting to the interest rate applied to their new or renewed CD.`,
                "Requirements": `• CD Account Number:<br>• Disputed Interest Rate:<br>• Advertised/Expected Rate:<br>• Date of Booking/Renewal:<br>• Current Rate:<br>• Specific Cause: (Rate Too Low / Competitor Comparison / Loyalty Expectation)`,
                "Template": `CM complaining about CD Rate Objection a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "CD Features": {
                "Reason": `•Complaint about specific features (e.g. inability to break before 6 months, overdraft % limit).<br>•The customer has a complaint or inquiry about a specific feature of their CD product.`,
                "Requirements": `• CD Account Number:<br>• CD Product Name:<br>• Specific feature in question:<br>• Feature:<br>• Specific Cause: (Redemption Restriction / Lending Limit / Minimum Amount)`,
                "Template": `CM complaining about CD Features a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Request": {
                "Reason": `•General service request related to CD (e.g. Hard copy of certificate, Statement).<br>•The customer is making a general service request related to their CD (e.g., inquiry about redemption value, statement copy).`,
                "Requirements": `• CD Account Number:<br>• Details of the service request:<br>• Request Type:<br>• Specific Cause: (Certificate Copy Request / Statement Request / Lien Inquiry)`,
                "Template": `CM complaining about Customer Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Release reservation delay": {
                "Reason": `•Funds from a matured or broken CD are stuck in "Reserved" status and not available.<br>•There is a delay in releasing a reservation or lien on a CD.`,
                "Requirements": `• CD Account Number:<br>• Reason for Reservation:<br>• Date release was requested/due:<br>• SR Number (if available):<br>• Maturity Date:<br>• Specific Cause: (SLA Breach / System Hang / Manual Intervention Needed)`,
                "Template": `CM complaining about Release reservation delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Misleading Information": {
                "Reason": `•Staff provided incorrect info about rates or redemption penalties at time of sale.<br>•The customer was given misleading information about a CD product during the sales process.`,
                "Requirements": `• CD Account Number:<br>• Details of the misleading information:<br>• Name of Sales Staff (if known):<br>• Date of booking:<br>• Staff Name:<br>• Specific Cause: (Hidden Penalty / Wrong Rate Quoted / Terms Misrepresentation)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Interest Calc. Methodology": {
                "Reason": `•Customer disputes the math/logic used to calculate interest (e.g. Days basis).<br>•The customer has a query about how the interest on their CD is calculated.`,
                "Requirements": `• CD Account Number:<br>• Statement Period in question:<br>• Specific question about the calculation:<br>• Calculation:<br>• Specific Cause: (360 vs 365 Days Dispute / Simple vs Compound / Accrual Logic)`,
                "Template": `CM complaining about Interest Calc. Methodology a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "CD Redemption Calculation": {
                "Reason": `•Dispute over the redemption value and "Breakage Penalty" calculation.<br>•The customer is disputing the calculation of proceeds or penalties for an early or on-maturity redemption of a CD.`,
                "Requirements": `• CD Account Number:<br>• Redemption Date:<br>• Disputed redemption amount/penalty:<br>• Expected amount:<br>• Penalty Amount:<br>• Specific Cause: (Penalty Calculation Error / System Glitch / Table Mismatch)`,
                "Template": `CM complaining about CD Redemption Calculation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "CD Renewed Automatically": {
                "Reason": `•CD rolled over for a new term despite customer instruction to close/redeem.<br>•A CD was renewed automatically against the customer's explicit instructions to redeem it upon maturity.`,
                "Requirements": `• CD Account Number:<br>• Maturity Date:<br>• Proof of redemption request (if any):<br>• Instruction Date:<br>• Specific Cause: (Instruction Not Captured / System Default / Staff Negligence)`,
                "Template": `CM complaining about CD Renewed Automatically a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Miss-Selling": {
                "Reason": `•CD sold to customer was unsuitable for their needs (e.g. Long term vs Liquidity need).<br>•The customer claims the terms of the CD (e.g., interest rate, penalty for early breakage) were misrepresented during the sale.`,
                "Requirements": `• CD Account Number:<br>• Name of Sales Staff (if known):<br>• Date of booking:<br>• Details of the misinformation:<br>• Product Sold:<br>• Specific Cause: (Unsuitable Advice / Forced Sale / Risk Profile Mismatch)`,
                "Template": `CM complaining about Miss-Selling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products terms & conditions": {
                "Reason": `•Customer objects to T&Cs (e.g. 6-month lock-in period, penalty rates).`,
                "Requirements": `• CD Number :<br>• Account:<br>• Old interest date:<br>• New interest date:<br>• Negatively impacted reason:<br>• Calling Party:<br>• Specific Cause: (Unfair Terms / Lack of Transparency / Rigid Rules)`,
                "Template": `CM complaining about Products terms & conditions a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Issuance Delay": {
                "Reason": `•Funds debited for CD booking but certificate not generated on system.`,
                "Requirements": `• Request channel (branch):<br>• Date of request:<br>• CD Amount:<br>• Account:<br>• Calling Party:<br>• Specific Cause: (Back Office Backlog / System Error / Approval Pending)`,
                "Template": `CM complaining about Issuance Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Breaking Delay": {
                "Reason": `•Request to redeem (break) the CD is pending execution beyond SLA.`,
                "Requirements": `• CD Reference :<br>• Request channel (branch):<br>• Date of request:<br>• Calling party:<br>• Specific Cause: (Workflow Stuck / System Error / Approval Delay)`,
                "Template": `CM complaining about Breaking Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not Related لـ CD
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Confirmation Letter Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "TD": {
            "TD Renewal Process": {
                "Reason": `•Issues encountered during the rollover of the Time Deposit (Auto-renewal instruction failure or incorrect terms).<br>•The customer has a complaint about the Time Deposit (TD) renewal process.`,
                "Requirements": `• TD Account Number:<br>• Maturity Date:<br>• Description of the procedural issue:<br>• TD Ref No:<br>• Specific Cause: (Instruction Ignored / System Default to CASA / Wrong Renewal Term / Rate Change Dispute)`,
                "Template": `CM complaining about TD Renewal Process a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Collateral Release": {
                "Reason": `•Delay in removing the lien/hold on the TD after the secured facility (Loan/OD/Card) is settled.<br>•A TD held as collateral against a loan has matured or the loan is settled, but the lien has not been removed.`,
                "Requirements": `• TD Account Number:<br>• Loan Account Number that was secured:<br>• Date of Loan Settlement:<br>• Secured Facility Ref:<br>• Specific Cause: (Manual Release Failure / System Sync Issue / Outstanding Fees / Process Delay)`,
                "Template": `CM complaining about Collateral Release a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to answer inquiries regarding TD rates, tenures, or breakage rules.<br>•A bank employee provided incorrect information about TD features, rates, or procedures.`,
                "Requirements": `• Branch/Department:<br>• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Specific Cause: (Training Gap / Wrong Guidance / Info Unavailable / Inability to Help)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Operational error by staff during booking, amending, or redeeming the Time Deposit.<br>•A bank employee mishandled a request related to the customer's TD.`,
                "Requirements": `• TD Account Number:<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Incident:<br>• Specific Cause: (Data Entry Error / Wrong Account Debited / Wrong Amount Booked / Process Violation)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Release reservation delay": {
                "Reason": `•Funds from a matured or broken TD are stuck in "Reserved/Hold" status and not available in the account.<br>•There is a delay in releasing a reservation or lien on a TD.`,
                "Requirements": `• TD Account Number:<br>• Reason for Reservation:<br>• Date release was requested/due:<br>• Maturity Date:<br>• Specific Cause: (SLA Breach / System Hang / Batch Delay / Manual Intervention Needed)`,
                "Template": `CM complaining about Release reservation delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Misleading Information": {
                "Reason": `•Customer was provided incorrect information regarding TD interest rates or redemption penalties.<br>•The customer was given misleading information about a TD product during the sales process.`,
                "Requirements": `• TD Account Number:<br>• Details of the misleading information:<br>• Name of Sales Staff (if known):<br>• Staff Name:<br>• Specific Cause: (Hidden Penalty / Wrong Rate Quoted / Terms Misrepresentation / Sales Error)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Interest Calc. Methodology": {
                "Reason": `•Dispute over the method used to calculate interest (e.g., Simple interest vs Compound, Day count basis).<br>•The customer has a query about how the interest on their TD is calculated.`,
                "Requirements": `• TD Account Number:<br>• Specific question about the calculation:<br>• Calculation:<br>• Specific Cause: (Days Basis Dispute / Calculation Logic Error / Rate Application Error)`,
                "Template": `CM complaining about Interest Calc. Methodology a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Interest Not-added": {
                "Reason": `•Maturity date or payout date passed but interest amount was not credited to the account.<br>•The interest earned on the Time Deposit (TD) was not credited to the linked account.`,
                "Requirements": `• TD Account Number:<br>• Linked Account Number:<br>• Interest Payment Date:<br>• TD Ref No:<br>• Due Date:<br>• Specific Cause: (System Failure / Cycle Mismatch / Account Block / Holiday Delay)`,
                "Template": `CM complaining about Interest Not-added a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products design": {
                "Reason": `•Customer dissatisfaction with the structure of the TD product (Available tenures, Minimum amounts).<br>•The customer is providing negative feedback on the design or structure of a TD product.`,
                "Requirements": `• TD Product Name:<br>• Specific feedback on the product design:<br>• Product Name:<br>• Specific Cause: (Lack of Flexibility / Tenure Gaps / Low Rates / Currency Limitation)`,
                "Template": `CM complaining about Products design a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•TD details (Rate, Maturity, Principal) shown incorrectly on Mobile/Online Banking.<br>•Incorrect data related to the TD is displayed on digital channels.`,
                "Requirements": `• TD Account Number:<br>• Channel (IB, App, Statement):<br>• Description of incorrect data:<br>• Screenshot (if possible):<br>• Channel:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail / Display Bug)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Miss-Selling": {
                "Reason": `•TD sold to customer was unsuitable for their financial needs (e.g. locked funds when liquidity was needed).<br>•The customer claims the terms of the TD were misrepresented during the sale.`,
                "Requirements": `• TD Account Number:<br>• Name of Sales Staff (if known):<br>• Date of booking:<br>• Details of the misinformation:<br>• Product Sold:<br>• Specific Cause: (Unsuitable Advice / Forced Sale / Risk Profile Mismatch / Needs Ignored)`,
                "Template": `CM complaining about Miss-Selling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products terms & conditions": {
                "Reason": `•Customer objects to the governing rules of the TD (e.g. Penalties, Renewal logic).`,
                "Requirements": `• TD Number :<br>• Account:<br>• Old interest date:<br>• New interest date:<br>• Negatively impacted reason:<br>• Calling Party:<br>• Specific Cause: (Unfair Terms / Lack of Transparency / Rigid Rules / Change in Terms)`,
                "Template": `CM complaining about Products terms & conditions a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Issuance Delay": {
                "Reason": `•Funds debited for TD booking but the deposit is not yet active on the system.`,
                "Requirements": `• Request channel (branch):<br>• Date of request:<br>• TD Amount:<br>• Account:<br>• Calling Party:<br>• Specific Cause: (Back Office Backlog / System Error / Approval Pending / Doc Deficiency)`,
                "Template": `CM complaining about Issuance Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Breaking Delay": {
                "Reason": `•Request to redeem (break) the TD before maturity is pending execution beyond SLA.`,
                "Requirements": `• TD Reference :<br>• Request channel (branch):<br>• Date of request:<br>• Calling party:<br>• Specific Cause: (Workflow Stuck / System Error / Approval Delay / Branch Inaction)`,
                "Template": `CM complaining about Breaking Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not Related لـ TD
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Payment Acceptance": {
        "Options": {
            "REFUND": {
                "Reason": `•Merchant is unable to process a refund transaction on the POS terminal (reversing a sale to the cardholder).<br>•The merchant is unable to process a refund transaction for a customer on their POS machine.`,
                "Requirements": `• Merchant Name & Merchant ID:<br>• Terminal ID:<br>• Date & Time of attempt:<br>• Error message displayed:<br>• Terminal ID (TID):<br>• Original Date:<br>• Error Msg:<br>• Specific Cause: (Supervisor Password Missing / Transaction Not Found / Card Type Not Supported / System Limit Exceeded)`,
                "Template": `CM complaining about REFUND a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP": {
                "Reason": `•Issues related to "Easy Payment Plan" (Installments) option on the POS (Option missing or transaction declined).<br>•The Easy Payment Plan (EPP) option is not available or not working on the merchant's POS terminal for eligible bank cards.`,
                "Requirements": `• Merchant Name & Merchant ID:<br>• Terminal ID:<br>• BIN range of the card being tested (first 6 digits):<br>• Description of the failure:<br>• Terminal ID (TID):<br>• Card BIN:<br>• Specific Cause: (Option Not Configured / Bin Range Not Supported / Slip Printing Error / Issuer Decline)`,
                "Template": `CM complaining about EPP a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "OFFLINE": {
                "Reason": `•POS terminal is unable to connect to the network or upload offline batch transactions.<br>•The merchant is experiencing issues with processing offline (voice authorization) transactions.`,
                "Requirements": `• Merchant Name & Merchant ID:<br>• Terminal ID:<br>• Date & Time of attempt:<br>• Description of the issue:<br>• Terminal ID (TID):<br>• Connection Type:<br>• Specific Cause: (No GPRS Signal / Wi-Fi Connection Fail / Batch Upload Stuck / SIM Card Error)`,
                "Template": `CM complaining about OFFLINE a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "VOID": {
                "Reason": `•Merchant cannot cancel a transaction (Void) before settlement (End of Day).<br>•The merchant is unable to void a transaction on their POS machine.`,
                "Requirements": `• Merchant Name & Merchant ID:<br>• Terminal ID:<br>• Transaction details to be voided (Amount, Time, RRN):<br>• Error message displayed:<br>• Terminal ID (TID):<br>• Trace No:<br>• Specific Cause: (Batch Already Settled / Transaction Not Found / Password Missing / System Error)`,
                "Template": `CM complaining about VOID a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "QR": {
                "Reason": `•Issues accepting payments via QR Code (Digital Wallets) on the POS terminal.<br>•The merchant is unable to generate a QR code or accept payments via QR on their POS terminal.`,
                "Requirements": `• Merchant Name & Merchant ID:<br>• Terminal ID:<br>• Error message displayed:<br>• Customer's wallet app (if known):<br>• Terminal ID (TID):<br>• Wallet Type:<br>• Specific Cause: (QR Generation Fail / Invalid QR Format / Wallet App Reject / Dynamic QR Error)`,
                "Template": `CM complaining about QR a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "DCC": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "SLA": {
            "Delay in POS installation": {
                "Reason": `•New POS request or replacement request exceeded the Service Level Agreement (SLA).`,
                "Requirements": `• Terminal ID / Merchant ID :<br>• Merchant name:<br>• Customer Name :<br>• Customer Mobile Number :<br>• Calling party :<br>• Date of the the request :<br>• Brief of the issue :<br>• Request Date:<br>• Merchant ID (MID):<br>• Specific Cause: (SLA Breach / Stock Unavailability / Technician No-Show / Missing Contracts)`,
                "Template": `CM complaining about Delay in POS installation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delay in agreement cycle": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Service Quality": {
            "Staff Complaint": {
                "Reason": `•Complaint regarding the behavior or professionalism of the Bank's Sales/Support staff.`,
                "Requirements": `• Terminal ID / Merchant ID :<br>• Merchant name:<br>• Customer Name :<br>• Customer Mobile Number :<br>• Relationship manger Name :<br>• Date of the incident :<br>• Calling Party :<br>• Brief of the issue :<br>• Staff Name:<br>• Incident Date:<br>• Specific Cause: (Rude Behavior / Unprofessional Conduct / Lack of Follow-up / Misinformation)`,
                "Template": `CM complaining about Staff Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Vendor Compliant": {
                "Reason": `•Complaint regarding the external field technician or support vendor (e.g. maintenance visits).`,
                "Requirements": `• Terminal ID / Merchant ID :<br>• Merchant name:<br>• Customer Name :<br>• Customer Mobile Number :<br>• Vendor Name :<br>• Date of the incident :<br>• Calling Party :<br>• Brief of the issue :<br>• Visit Date:<br>• Vendor Name:<br>• Specific Cause: (Technician No-Show / Rude Technician / Incompetence / Unprofessional Appearance)`,
                "Template": `CM complaining about Vendor Compliant a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            }
        },
        "e-commerce - Software": {
            "Transaction Duplication": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Integration Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Login Error": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Non CIB Wallets": {
        "Non CIB Wallet": {
            "Non Customer Dispute": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },

    "Loans": {
        "Personal Loan": {
            "Loan Reschedule": {
                "Reason": `•Request to restructure the loan (change tenure/installment) due to financial hardship or high DBR.<br>•The customer is requesting to reschedule their personal loan payments.`,
                "Requirements": `• Loan Account Number:<br>• Reason for Rescheduling Request:<br>• Proposed new installment amount/tenor:<br>• Request Date:<br>• Specific Cause: (Request Rejected / High Interest Rate Applied / Process Delay)`,
                "Template": `CM complaining about Loan Reschedule a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Lending policy": {
                "Reason": `•Complaint about the bank's credit policy (e.g. DBR limit, Employer list, Minimum income).(FYI)<br>•The customer is complaining about the bank's lending policy for personal loans.(FYI)`,
                "Requirements": `• Specific policy being disputed:<br>• Application Reference Number (if applicable):<br>• Policy Point:<br>• Specific Cause: (Employer Not Listed / DBR Calculation Dispute / Income Rejection)`,
                "Template": `CM complaining about Lending policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Pricing": {
                "Reason": `•Complaint that the interest rate is too high compared to market or competitors.<br>•The customer is complaining about the interest rate or processing fees applied to their personal loan.`,
                "Requirements": `• Loan Account Number:<br>• Disputed interest rate/fee amount:<br>• Advertised/expected rate/fee:<br>• Rate:<br>• Specific Cause: (Rate High / Competitor Comparison / Rate Increase Dispute)`,
                "Template": `CM complaining about Loan Pricing a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Collection Deduction": {
                "Reason": `•Late fees or installments deducted from account (Set-off) or salary transfer.<br>•A deduction from the customer's account for loan collection is disputed.`,
                "Requirements": `• Loan Account Number:<br>• Source Account Number for deduction:<br>• Deduction Amount & Date:<br>• Reason for Dispute:<br>• Deduction Date:<br>• Specific Cause: (Late Payment Fee Dispute / System Auto-deduction / Wrong Amount)`,
                "Template": `CM complaining about Collection Deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Rescheduling": {
                "Reason": `•(Duplicate) Delay or rejection of loan restructuring request.<br>•A request to reschedule a personal loan has been delayed, rejected, or processed incorrectly.`,
                "Requirements": `• Loan Account Number:<br>• Date of Rescheduling Request:<br>• SR Number (if available):<br>• Description of the issue:<br>• Request Date:<br>• Specific Cause: (Approval Pending / Terms Disagreement / System Error)`,
                "Template": `CM complaining about Loan Rescheduling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Application delay": {
                "Reason": `•Processing of the loan application exceeded TAT (Underwriting delays).<br>•There is a significant delay in getting an approval or rejection decision on a personal loan application.`,
                "Requirements": `• Application Reference Number:<br>• Date of Application:<br>• Customer Name & National ID:<br>• App Date:<br>• Specific Cause: (Underwriting Backlog / Missing Docs / System Error / Employer Check Delay)`,
                "Template": `CM complaining about Loan Application delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Misleading Information": {
                "Reason": `•Customer claims staff provided incorrect info regarding rates, fees, or insurance.<br>•The customer claims they were given misleading information about the personal loan's terms.`,
                "Requirements": `• Loan Account Number:<br>• Details of the misleading information:<br>• Name of Sales Staff (if known):<br>• Date of application/sale:<br>• Staff Name:<br>• Specific Cause: (Hidden Fees / Wrong Installment Quoted / Insurance Misrepresentation)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan request rejection": {
                "Reason": `•Application for personal loan declined by Credit Risk or Policy.<br>•A personal loan application was rejected, and the customer wants to know the reason.`,
                "Requirements": `• Application Reference Number:<br>• Date of Application:<br>• Rejection Reason:<br>• Specific Cause: (High DBR / I-Score Issue / Employer Policy / Income Insufficient)`,
                "Template": `CM complaining about loan request rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Charges": {
                "Reason": `•Dispute over admin fees, insurance premiums, or processing fees.<br>•The customer is disputing a specific charge or fee on their personal loan account.`,
                "Requirements": `• Loan Account Number:<br>• Disputed charge amount:<br>• Date charge was applied:<br>• Name of the charge from statement:<br>• Amount:<br>• Specific Cause: (Fee Higher than Agreed / Unwanted Insurance / Double Charge)`,
                "Template": `CM complaining about Loan Charges a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrongly Booked Loan": {
                "Reason": `•Loan booked with incorrect details (Amount, Tenure, Rate) differing from application.<br>•The personal loan was booked with incorrect terms compared to the signed contract.`,
                "Requirements": `• Loan Account Number:<br>• Incorrect term(s) on the system:<br>• Correct term(s) as per contract:<br>• Copy of loan agreement (if available):<br>• Error Details:<br>• Specific Cause: (Wrong Tenure / Wrong Amount / Wrong Interest Rate / Wrong Account Credited)`,
                "Template": `CM complaining about Wrongly Booked Loan a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance letter Policy": {
                "Reason": `•Dissatisfaction with requirements/fees to issue a liability release letter.(FYI)<br>•The customer is complaining about the bank's policy for issuing a personal loan clearance letter.(FYI)`,
                "Requirements": `• Loan Account Number:<br>• Specific policy being disputed:<br>• Policy Point:<br>• Specific Cause: (High Fee / Waiting Period / Format Dispute / Refusal to Issue)`,
                "Template": `CM complaining about Clearance letter Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance Delivery Delay": {
                "Reason": `•Physical delivery of the clearance letter is delayed.<br>•There is a delay in the delivery of a requested clearance letter for a personal loan.`,
                "Requirements": `• Loan Account Number:<br>• Date of Request:<br>• Expected Delivery Address:<br>• SR Number (if available):<br>• Request Date:<br>• Specific Cause: (Courier Delay / Lost in Transit / Wrong Address)`,
                "Template": `CM complaining about Clearance Delivery Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "External Agency Communication": {
                "Reason": `•Complaint about harassment or behavior of third-party debt collectors.<br>•The customer is complaining about unprofessional communication from an external collection agency.`,
                "Requirements": `• Loan Account Number:<br>• Agency Name & Agent Name:<br>• Date & Time of Communication:<br>• Details of the incident:<br>• Agency Name:<br>• Specific Cause: (Harassment / Privacy Breach / Rude Behavior / Calling Workplace)`,
                "Template": `CM complaining about External Agency Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Mishandling": {
                "Reason": `•Staff error in processing the loan file or documentation.<br>•A bank employee mishandled a request related to the customer's personal loan.`,
                "Requirements": `• Loan Account Number:<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Incident:<br>• Specific Cause: (Lost Documents / Process Violation / Negligence / Wrong Info)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Direct Debit Process": {
                "Reason": `•Failure to deduct the monthly installment from the linked account.<br>•The customer is complaining about an issue with the direct debit set up for their personal loan installments.`,
                "Requirements": `• Loan Account Number:<br>• Source Account for DD:<br>• Description of the issue (e.g., DD not executed, wrong amount taken):<br>• Due Date:<br>• Specific Cause: (System Glitch / Late Deduction / Double Deduction / Setup Failure)`,
                "Template": `CM complaining about Direct Debit Process a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to answer inquiries about loan details or settlement.<br>•A bank employee provided incorrect information about personal loan products or procedures.`,
                "Requirements": `• Branch/Department:<br>• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Question asked and incorrect information provided:<br>• Query:<br>• Specific Cause: (Training Gap / Wrong Info on Penalty / Inability to Help)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrong Displayed Data": {
                "Reason": `•Loan details (Tenure, Amount, Rate) shown incorrectly on App/Online.<br>•Incorrect data related to the personal loan is displayed on digital channels.`,
                "Requirements": `• Loan Account Number:<br>• Channel (IB, App, Statement):<br>• Description of incorrect data:<br>• Screenshot (if possible):<br>• Channel:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Contract": {
                "Reason": `•Dispute regarding clauses in the signed loan agreement.<br>•The customer has not received a copy of their loan contract or is disputing a clause within it.`,
                "Requirements": `• Loan Account Number:<br>• Date of Loan Booking:<br>• Specific clause being disputed (if applicable):<br>• Clause:<br>• Specific Cause: (Unfair Terms / Signature Dispute / Clause Not Explained)`,
                "Template": `CM complaining about Loan Contract a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Missing Loan Installment": {
                "Reason": `•Installment paid but not showing on system history.<br>•An installment payment made by the customer is not reflecting on their loan account, causing it to appear overdue.`,
                "Requirements": `• Loan Account Number:<br>• Date of Payment:<br>• Payment Amount:<br>• Channel of Payment:<br>• Proof of payment (receipt, transaction record):<br>• Month:<br>• Specific Cause: (Posting Delay / System Skip / Schedule Error)`,
                "Template": `CM complaining about Missing Loan Installment a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Sales Approach": {
                "Reason": `•Aggressive or inappropriate behavior by the sales team/agent.<br>•The customer is complaining about the aggressive or misleading sales tactics used by an agent to sell a personal loan.`,
                "Requirements": `• Branch/Location/Channel of sale:<br>• Date of interaction:<br>• Name/Description of Sales Staff (if known):<br>• Sales Rep:<br>• Specific Cause: (Forced Sale / Harassment / Misrepresentation / Unwanted Calls)`,
                "Template": `CM complaining about Sales Approach a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Settlement Policy": {
                "Reason": `•Complaint about Early Settlement Fees (Pre-payment penalty).(FYI)<br>•The customer is complaining about the bank's policy for early or final settlement of a personal loan (e.g., penalty fees).(FYI)`,
                "Requirements": `• Loan Account Number:<br>• Specific policy being disputed:<br>• Fee Amount:<br>• Specific Cause: (Fee Dispute / Calculation Method / Policy Complaint / 5% vs 3% Dispute)`,
                "Template": `CM complaining about Loan Settlement Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance Issuance Policy": {
                "Reason": `•Rules regarding the issuance of the final clearance letter.(FYI)<br>•The customer is complaining about the policy for issuing a clearance letter for a personal loan.(FYI)`,
                "Requirements": `• Loan Account Number:<br>• Specific policy being disputed:<br>• Issue:<br>• Specific Cause: (Strict Requirements / Refusal to Issue / Fee Dispute)`,
                "Template": `CM complaining about Clearance Issuance Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Products terms & conditions.": {
                "Reason": `•Objection to general Loan T&Cs (e.g. Insurance requirement).(FYI)<br>•The customer is complaining that the personal loan's T&Cs are unclear or were not properly explained.(FYI)`,
                "Requirements": `• Loan Account Number:<br>• Specific Term/Condition being disputed:<br>• Term:<br>• Specific Cause: (Unfair Terms / Insurance Clause / Penalty Clause)`,
                "Template": `CM complaining about Products terms & conditions. a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Products design": {
                "Reason": `•Dissatisfaction with product features (Max amount, Max Tenure).<br>•The customer is providing negative feedback on the design or structure of a personal loan product.`,
                "Requirements": `• Loan Product Name:<br>• Specific feedback on the product design:<br>• Feature:<br>• Specific Cause: (Tenure Too Short / Max Amount Too Low / Rate Type)`,
                "Template": `CM complaining about Products design a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Linkage Accounts": {
                "Reason": `•Issue linking the repayment account to the personal loan.<br>•The customer is complaining about an issue with the bank account linked to the loan for deductions.`,
                "Requirements": `• Loan Account Number:<br>• Linked Account Number:<br>• Description of the issue:<br>• Account No:<br>• Specific Cause: (Link Failure / Wrong Account Linked / Deduction Error)`,
                "Template": `CM complaining about Loan Linkage Accounts a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Buy out complaint": {
                "Reason": `•Issues with transferring a loan to/from another bank (Liability settlement).<br>•The customer has a complaint related to the process of another bank buying out their personal loan.`,
                "Requirements": `• Loan Account Number:<br>• Name of the other bank:<br>• Description of the issue (e.g., delay in providing settlement letter):<br>• Other Bank:<br>• Specific Cause: (Liability Letter Delay / Cheque Issuance Delay / Settlement Dispute)`,
                "Template": `CM complaining about Buy out complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Miss-Selling": {
                "Reason": `•Loan sold under false pretenses or wrong advice.`,
                "Requirements": `• Loan Account Number:<br>• Details of the sales pitch:<br>• Name of Sales Staff (if known):<br>• How the product differs from what was promised:<br>• Sales Rep:<br>• Specific Cause: (Hidden Conditions / Wrong Monthly Installment Quoted / Unsuitable Product)`,
                "Template": `CM complaining about Miss-Selling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "AFU Investigation Complaint": {
                "Reason": `•Fraud investigation (Employment/Income check) holding up the loan.`,
                "Requirements": `• Applying date:<br>• Applying channel:<br>• Guarantee:<br>• Company name:<br>• National ID:<br>• Calling party:<br>• Case Ref:<br>• Specific Cause: (Verification Delay / Document Check / Lack of Feedback)`,
                "Template": `CM complaining about AFU Investigation Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan booking delay": {
                "Reason": `•Loan approved/signed but funds not disbursed to customer.`,
                "Requirements": `• Date of signing checks:<br>• LD #<br>• Signed checks branch (location of signing checks):<br>• AFU file number:<br>• Date of AFU approval:<br>• Calling Party:<br>• Approval Date:<br>• Specific Cause: (Disbursement Delay / Account Credit Issue / System Error)`,
                "Template": `CM complaining about loan booking delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Cheques delay": {
                "Reason": `•Delay in returning post-dated cheques (if applicable) after settlement.`,
                "Requirements": `• Date of AFU approval:<br>• AFU file number:<br>• Guarantee:<br>• Calling party:<br>• Settlement Date:<br>• Specific Cause: (Cheques Lost / Retrieval from Archive Delay / Branch Delay)`,
                "Template": `CM complaining about Loan Cheques delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance letter Delay": {
                "Reason": `•Delay in issuing the final liability clearance letter.`,
                "Requirements": `• Request channel (branch):<br>• Request date:<br>• LD number:<br>• Cst mobile # filled on the application:<br>• Calling party:<br>• Request Date:<br>• Specific Cause: (SLA Breach / Signatory Unavailable / System Glitch)`,
                "Template": `CM complaining about Clearance letter Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan settlement delay": {
                "Reason": `•Loan paid off but status not updated to "Closed".`,
                "Requirements": `• LD #<br>• Date of loan installment #<br>• Calling Party:<br>• Payment Date:<br>• Specific Cause: (System Batch Delay / Manual Closure Pending / Residual Interest)`,
                "Template": `CM complaining about loan settlement delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Collection Communication": {
                "Reason": `•Complaint about the tone/frequency of collection calls.`,
                "Requirements": `• incident detail:<br>• Incident Date:<br>• Collection caller:<br>• Specific Cause: (Rude Tone / Frequent Calls / Harassment / Calling Relatives)`,
                "Template": `CM complaining about Collection Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrong SMS": {
                "Reason": `•Alert received with wrong payment/balance details.`,
                "Requirements": `• Mobile Number:<br>• SMS Text:<br>• Date & Time:<br>• Specific Cause: (Template Error / Wrong Data / System Error)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            "SMS Not Sent": {
                "Reason": `•Payment due/paid but no SMS alert received.`,
                "Requirements": `• Loan Account Number:<br>• Registered Mobile:<br>• Date:<br>• Specific Cause: (Gateway Fail / Network Issue / DND)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            "Alert Service": {
                "Reason": `•Issue with subscription to loan alerts.`,
                "Requirements": `• Loan Account Number:<br>• Registered Mobile:<br>• Issue Description:<br>• Specific Cause: (Service Not Active / Fee Dispute / Content Complaint)`,
                "Template": `CM complaining about Alert Service a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            // حالات Not related في Personal Loan
            "WRT Complaints": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Receiving facility documents": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to CBE NL": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to I-Score": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Facility Request Status": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score - Updating Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score Related Issues": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "PIL Promotion Processing": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability .": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Auto Loan": {
            // معظم الحالات مشابهة للـ Personal Loan مع استبدال اسم المنتج
            "Misleading Information": {
                "Reason": `•Incorrect info regarding rates, insurance, or car ban terms.<br>•The customer claims they were given misleading information about the auto loan's terms.`,
                "Requirements": `• Loan Account Number:<br>• Details:<br>• Staff Name:<br>• Specific Cause: (Wrong Rate Quoted / Hidden Fees / Car Ban Terms Misrepresented)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan request rejection": {
                "Reason": `•Application for auto loan declined by Credit Risk or Policy.`,
                "Requirements": `• Application Ref No:<br>• Date of Application:<br>• Specific Cause: (High DBR / I-Score Issue / Car Model Policy / Income Insufficient)`,
                "Template": `CM complaining about loan request rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Charges": {
                "Reason": `•Dispute over admin fees, insurance premiums, or evaluation fees.`,
                "Requirements": `• Loan Account Number:<br>• Disputed amount:<br>• Fee type:<br>• Amount:<br>• Specific Cause: (Fee Higher than Agreed / Unwanted Insurance / Double Charge)`,
                "Template": `CM complaining about Loan Charges a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Collection Deduction": {
                "Reason": `•Late fees or installments deducted incorrectly.`,
                "Requirements": `• Loan Account Number:<br>• Deduction Details:<br>• Deduction Date:<br>• Specific Cause: (Late Payment Fee Dispute / System Auto-deduction / Wrong Amount)`,
                "Template": `CM complaining about Collection Deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance Delivery Delay": {
                "Reason": `•Physical delivery of clearance letter for car ban release is delayed.`,
                "Requirements": `• Loan Account Number:<br>• Date of Request:<br>• Expected Address:<br>• Request Date:<br>• Specific Cause: (Courier Delay / Lost in Transit / Wrong Address)`,
                "Template": `CM complaining about Clearance Delivery Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Lien Mark removal Letter": {
                "Reason": `•Delay in issuing letter to Traffic Authority (Moroor) to remove car ban.`,
                "Requirements": `• Loan Account Number:<br>• Date of final settlement:<br>• Request Date:<br>• Specific Cause: (Signature Delay / System Block / Lost Request / Traffic Unit Issue)`,
                "Template": `CM complaining about Lien Mark removal Letter a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Reschedule": {
                "Reason": `•Request to restructure the loan due to hardship.`,
                "Requirements": `• Loan Account Number:<br>• Reason:<br>• Request Date:<br>• Specific Cause: (Request Rejected / High Interest Rate / Process Delay)`,
                "Template": `CM complaining about Loan Reschedule a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to answer inquiries about car ban lifting or licensing.`,
                "Requirements": `• Branch/Department:<br>• Query:<br>• Specific Cause: (Training Gap / Wrong Info on Traffic Rules / Inability to Help)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Direct Debit Process": {
                "Reason": `•Failure to deduct the monthly installment from the linked account.`,
                "Requirements": `• Loan Account Number:<br>• Due Date:<br>• Specific Cause: (System Glitch / Late Deduction / Double Deduction / Setup Fail)`,
                "Template": `CM complaining about Direct Debit Process a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Contract": {
                "Reason": `•Dispute regarding clauses in the signed loan agreement.`,
                "Requirements": `• Loan Account Number:<br>• Clause:<br>• Specific Cause: (Unfair Terms / Signature Dispute / Clause Not Explained)`,
                "Template": `CM complaining about Loan Contract a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Missing Loan Installment": {
                "Reason": `•An installment payment made by the customer is not reflecting.`,
                "Requirements": `• Loan Account Number:<br>• Month:<br>• Specific Cause: (Posting Delay / System Skip / Schedule Error)`,
                "Template": `CM complaining about Missing Loan Installment a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Settlement Policy": {
                "Reason": `•Complaint about the bank's policy for early or final settlement of an auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Specific Cause: (Fee Dispute / Calculation Method / Policy Complaint)`,
                "Template": `CM complaining about Loan Settlement Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance letter Policy": {
                "Reason": `•Dissatisfaction with the bank's policy for issuing an auto loan clearance letter.`,
                "Requirements": `• Loan Account Number:<br>• Policy:<br>• Specific Cause: (High Fee / Waiting Period Complaint / Format Dispute)`,
                "Template": `CM complaining about Clearance letter Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Rescheduling": {
                "Reason": `•(Duplicate) A request to reschedule an auto loan has been delayed or rejected.`,
                "Requirements": `• Loan Account Number:<br>• Request Date:<br>• Specific Cause: (Approval Pending / Terms Disagreement / System Error)`,
                "Template": `CM complaining about Loan Rescheduling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance Issuance Policy": {
                "Reason": `•The customer is complaining about the policy for issuing a clearance letter for an auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Issue:<br>• Specific Cause: (Strict Requirements / Refusal to Issue / Fee Dispute)`,
                "Template": `CM complaining about Clearance Issuance Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Products terms & conditions.": {
                "Reason": `•The customer is complaining that the auto loan's T&Cs are unclear.`,
                "Requirements": `• Loan Account Number:<br>• Term:<br>• Specific Cause: (Unfair Terms / Insurance Clause / Ban Release Clause)`,
                "Template": `CM complaining about Products terms & conditions. a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Products design": {
                "Reason": `•The customer is providing negative feedback on the design or structure of an auto loan product.`,
                "Requirements": `• Loan Product Name:<br>• Feature:<br>• Specific Cause: (Tenure Too Short / Down Payment High / Rate Type)`,
                "Template": `CM complaining about Products design a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Linkage Accounts": {
                "Reason": `•The customer is complaining about an issue with the bank account linked to the auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Account No:<br>• Specific Cause: (Link Failure / Wrong Account Linked / Deduction Error)`,
                "Template": `CM complaining about Loan Linkage Accounts a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Buy out complaint": {
                "Reason": `•The customer has a complaint related to the process of another bank buying out their auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Other Bank:<br>• Specific Cause: (Liability Letter Delay / Cheque Issuance Delay / Settlement Dispute)`,
                "Template": `CM complaining about Buy out complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Pricing": {
                "Reason": `•The customer is complaining about the interest rate or processing fees applied to their auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Rate:<br>• Specific Cause: (Rate High / Competitor Comparison / Rate Changed)`,
                "Template": `CM complaining about Loan Pricing a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Application delay": {
                "Reason": `•There is a significant delay in getting a decision on an auto loan application.`,
                "Requirements": `• Application Reference Number:<br>• App Date:<br>• Specific Cause: (Underwriting Backlog / Missing Docs / System Error)`,
                "Template": `CM complaining about Loan Application delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Mishandling": {
                "Reason": `•A bank employee mishandled a request related to the customer's auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Incident:<br>• Specific Cause: (Lost Documents / Payment to Dealer Delayed / Wrong Car Details)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrong Displayed Data": {
                "Reason": `•Incorrect data related to the auto loan is displayed on digital channels.`,
                "Requirements": `• Loan Account Number:<br>• Channel:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Sales Approach": {
                "Reason": `•The customer is complaining about the sales tactics used by an agent to sell an auto loan.`,
                "Requirements": `• Sales Rep:<br>• Specific Cause: (Forced Sale / Harassment / Misrepresentation)`,
                "Template": `CM complaining about Sales Approach a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Miss-Selling": {
                "Reason": `•The customer feels the auto loan product was sold to them based on misleading information.`,
                "Requirements": `• Loan Account Number:<br>• Sales Rep:<br>• Specific Cause: (Hidden Conditions / Wrong Monthly Installment Quoted)`,
                "Template": `CM complaining about Miss-Selling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan settlement delay": {
                "Reason": `•There is a delay in processing the final settlement of an auto loan.`,
                "Requirements": `• Loan Account Number:<br>• Payment Date:<br>• Specific Cause: (System Batch Delay / Manual Closure Pending / Residual Interest)`,
                "Template": `CM complaining about loan settlement delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Cheques delay": {
                "Reason": `•There is a delay in issuing the loan disbursement cheques to the auto dealer.`,
                "Requirements": `• Settlement Date:<br>• Specific Cause: (Cheques Lost / Retrieval from Archive Delay / Branch Delay)`,
                "Template": `CM complaining about Loan Cheques delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan booking delay": {
                "Reason": `•There is a delay in booking the auto loan after all documents have been approved.`,
                "Requirements": `• Approval Date:<br>• Specific Cause: (Disbursement Delay / Pay Order Issue / Dealer Account Issue)`,
                "Template": `CM complaining about loan booking delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance letter Delay": {
                "Reason": `•There is a delay in the issuance or delivery of a clearance letter for a settled auto loan.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (SLA Breach / Signatory Unavailable / System Glitch)`,
                "Template": `CM complaining about Clearance letter Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "AFU Investigation Complaint": {
                "Reason": `•The customer has a complaint related to an investigation conducted by the Anti-Fraud Unit (AFU) on their auto loan.`,
                "Requirements": `• Case Ref:<br>• Specific Cause: (Verification Delay / Document Check / Lack of Feedback)`,
                "Template": `CM complaining about AFU Investigation Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Collection Communication": {
                "Reason": `•Complaint about the tone/frequency of collection calls.`,
                "Requirements": `• Caller:<br>• Specific Cause: (Rude Tone / Frequent Calls / Calling Relatives)`,
                "Template": `CM complaining about Collection Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "License Renewal letter delay": {
                "Reason": `•Delay in letter to Traffic Unit allowing license renewal (while ban active).`,
                "Requirements": `• Request Date:<br>• Specific Cause: (Branch Delay / Signature Delay / System Block)`,
                "Template": `CM complaining about License Renewal letter delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrong SMS": {
                "Reason": `•Alert received with wrong payment/balance details.`,
                "Requirements": `• SMS Text:<br>• Specific Cause: (Template Error / Wrong Data / System Error)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            "SMS Not Sent": {
                "Reason": `•The customer is not receiving important SMS alerts for their auto loan.`,
                "Requirements": `• Date:<br>• Specific Cause: (Gateway Fail / Network Issue / DND)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            "Alert Service": {
                "Reason": `•The customer is not receiving important SMS alerts for their auto loan.`,
                "Requirements": `• Issue:<br>• Specific Cause: (Service Not Active / Fee Dispute / Content Complaint)`,
                "Template": `CM complaining about Alert Service a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            // حالات Not related في Auto Loan
            "Wrong Reporting to I-Score": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Facility Request Status": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score - Updating Data": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score Related Issues": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability .": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "WRT Complaints": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Lending policy": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Receiving facilitys documents": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to CBE NL": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Mortgage": {
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to explain Mortgage specific laws, CBE initiatives, or early settlement rules.`,
                "Requirements": `• Query Topic:<br>• Specific Cause: (CBE Initiative Rules / Legal Procedures / Subsidized Loan Info / Staff Ignorance)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Direct Debit Process": {
                "Reason": `•Failure to collect the mortgage installment from the linked account on the due date.`,
                "Requirements": `• Due Date:<br>• Specific Cause: (System Glitch / Late Deduction / Double Deduction / Setup Failure)`,
                "Template": `CM complaining about Direct Debit Process a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Contract": {
                "Reason": `•Dispute regarding clauses in the long-term mortgage contract (e.g. Variable rates).`,
                "Requirements": `• Clause:<br>• Specific Cause: (Unfair Terms / Rate Variability Dispute / Signature Dispute / Insurance Clause)`,
                "Template": `CM complaining about Loan Contract a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Missing Loan Installment": {
                "Reason": `•An installment payment is not reflecting on their mortgage account.`,
                "Requirements": `• Month:<br>• Specific Cause: (Posting Delay / System Skip / Schedule Error / Suspense Account)`,
                "Template": `CM complaining about Missing Loan Installment a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Settlement Policy": {
                "Reason": `•The customer is complaining about the bank's policy for early or final settlement of a mortgage.(FYI)`,
                "Requirements": `• Loan Account Number:<br>• Specific Cause: (High Penalty / CBE Exemption Ignored / Interest Calculation Dispute)`,
                "Template": `CM complaining about Loan Settlement Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance letter Policy": {
                "Reason": `•The customer is complaining about the bank's policy for issuing a mortgage clearance letter.(FYI)`,
                "Requirements": `• Policy Point:<br>• Specific Cause: (High Fee / Waiting Period / Format Dispute / Property Release Rules)`,
                "Template": `CM complaining about Clearance letter Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Reschedule": {
                "Reason": `•The customer is requesting to reschedule their mortgage payments.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (Request Rejected / High Interest Rate Applied / Process Delay)`,
                "Template": `CM complaining about Loan Reschedule a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance Issuance Policy": {
                "Reason": `•The customer is complaining about the policy for issuing a clearance letter for a mortgage.(FYI)`,
                "Requirements": `• Issue:<br>• Specific Cause: (Strict Requirements / Refusal to Issue / Fee Dispute)`,
                "Template": `CM complaining about Clearance Issuance Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Products terms & conditions.": {
                "Reason": `•The customer is complaining that the mortgage's T&Cs are unclear.(FYI)`,
                "Requirements": `• Term:<br>• Specific Cause: (Unfair Terms / Insurance Requirement / Property Valuation Clause)`,
                "Template": `CM complaining about Products terms & conditions. a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Products design": {
                "Reason": `•The customer is providing negative feedback on the design or structure of a mortgage product.`,
                "Requirements": `• Feature:<br>• Specific Cause: (Tenure Too Short / Down Payment Too High / Rate Type)`,
                "Template": `CM complaining about Products design a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Linkage Accounts": {
                "Reason": `•The customer is complaining about an issue with the bank account linked to the mortgage.`,
                "Requirements": `• Account No:<br>• Specific Cause: (Link Failure / Wrong Account Linked / Deduction Error)`,
                "Template": `CM complaining about Loan Linkage Accounts a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Charges": {
                "Reason": `•The customer is disputing a specific charge or fee on their mortgage account.`,
                "Requirements": `• Amount:<br>• Specific Cause: (Appraisal Fee Dispute / Admin Fee High / Double Charge)`,
                "Template": `CM complaining about Loan Charges a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Lending policy": {
                "Reason": `•The customer is complaining about the bank's lending policy for mortgages.(FYI)`,
                "Requirements": `• Policy Point:<br>• Specific Cause: (Property Rejected / Income Type Not Accepted / DBR Calculation)`,
                "Template": `CM complaining about Lending policy a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Pricing": {
                "Reason": `•The customer is complaining about the interest rate or fees applied to their mortgage.`,
                "Requirements": `• Rate:<br>• Specific Cause: (Rate High / Competitor Comparison / Rate Increase Dispute)`,
                "Template": `CM complaining about Loan Pricing a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Rescheduling": {
                "Reason": `•A request to reschedule a mortgage has been delayed or rejected.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (Approval Pending / Terms Disagreement / System Error)`,
                "Template": `CM complaining about Loan Rescheduling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Misleading Information": {
                "Reason": `•The customer claims they were given misleading information about the mortgage's terms.`,
                "Requirements": `• Staff Name:<br>• Specific Cause: (Subsidized Loan Eligibility / Wrong Installment Quoted / Hidden Fees)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan request rejection": {
                "Reason": `•A mortgage application was rejected, and the customer wants to know the reason.`,
                "Requirements": `• Rejection Reason:<br>• Specific Cause: (Property Legal Issue / Valuation Low / High DBR / I-Score)`,
                "Template": `CM complaining about loan request rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Collection Deduction": {
                "Reason": `•A deduction from the customer's account for mortgage collection is disputed.`,
                "Requirements": `• Deduction Date:<br>• Specific Cause: (Late Payment Fee Dispute / System Auto-deduction / Wrong Amount)`,
                "Template": `CM complaining about Collection Deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Application delay": {
                "Reason": `•There is a significant delay in getting a decision on a mortgage application.`,
                "Requirements": `• App Date:<br>• Specific Cause: (Legal Opinion Delay / Appraisal Delay / Underwriting Backlog)`,
                "Template": `CM complaining about Loan Application delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Facility Request Status": {
                "Reason": `•The customer is requesting an update on the status of their mortgage facility request.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (Lost Application / Pending Legal Check / Lack of Communication)`,
                "Template": `CM complaining about Facility Request Status a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance Delivery Delay": {
                "Reason": `•There is a delay in the delivery of a requested clearance letter for a mortgage.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (Courier Delay / Lost in Transit / Wrong Address)`,
                "Template": `CM complaining about Clearance Delivery Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "External Agency Communication": {
                "Reason": `•The customer is complaining about communication from an external collection agency regarding their mortgage.`,
                "Requirements": `• Agency:<br>• Specific Cause: (Appraiser No-show / Rude Behavior / Unprofessional Conduct)`,
                "Template": `CM complaining about External Agency Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Mishandling": {
                "Reason": `•A bank employee mishandled a request related to the customer's mortgage.`,
                "Requirements": `• Incident:<br>• Specific Cause: (Lost Title Deeds / Wrong Filing / Process Violation)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrong Displayed Data": {
                "Reason": `•Incorrect data related to the mortgage is displayed on digital channels.`,
                "Requirements": `• Channel:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Miss-Selling": {
                "Reason": `•The customer feels the mortgage product was sold to them based on misleading information.`,
                "Requirements": `• Sales Rep:<br>• Specific Cause: (Hidden Conditions / Wrong Advice on Variable Rate / Affordability Issue)`,
                "Template": `CM complaining about Miss-Selling a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan settlement delay": {
                "Reason": `•There is a delay in processing the final settlement of a mortgage.`,
                "Requirements": `• Payment Date:<br>• Specific Cause: (System Batch Delay / Legal Release Delay / Residual Balance)`,
                "Template": `CM complaining about loan settlement delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Loan Cheques delay": {
                "Reason": `•There is a delay in issuing the loan disbursement cheques for the mortgage.`,
                "Requirements": `• Settlement Date:<br>• Specific Cause: (Cheques Lost / Archive Retrieval Delay / Branch Delay)`,
                "Template": `CM complaining about Loan Cheques delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "loan booking delay": {
                "Reason": `•There is a delay in booking the mortgage after all documents have been approved.`,
                "Requirements": `• Approval Date:<br>• Specific Cause: (Disbursement Delay / Pay Order Issue / Contract Registration Delay)`,
                "Template": `CM complaining about loan booking delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Clearance letter Delay": {
                "Reason": `•There is a delay in the issuance or delivery of a clearance letter for a settled mortgage.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (SLA Breach / Signatory Unavailable / System Glitch)`,
                "Template": `CM complaining about Clearance letter Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "AFU Investigation Complaint": {
                "Reason": `•The customer has a complaint related to an investigation conducted by the Anti-Fraud Unit (AFU) on their mortgage.`,
                "Requirements": `• Case Ref:<br>• Specific Cause: (Verification Delay / Document Check / Lack of Feedback)`,
                "Template": `CM complaining about AFU Investigation Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Collection Communication": {
                "Reason": `•Complaint about the tone/frequency of collection calls.`,
                "Requirements": `• Caller:<br>• Specific Cause: (Rude Tone / Frequent Calls / Harassment)`,
                "Template": `CM complaining about Collection Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": "No",
                "Related_CC_&_Not": "Yes"
            },
            "Wrong SMS": {
                "Reason": `•The customer received an incorrect SMS notification related to their mortgage.`,
                "Requirements": `• SMS Text:<br>• Specific Cause: (Template Error / Wrong Data / System Error)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            "SMS Not Sent": {
                "Reason": `•The customer is not receiving important SMS alerts for their mortgage.`,
                "Requirements": `• Date:<br>• Specific Cause: (Gateway Fail / Network Issue / DND)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            "Alert Service": {
                "Reason": `•The customer is not receiving important SMS alerts for their mortgage.`,
                "Requirements": `• Issue:<br>• Specific Cause: (Service Not Active / Fee Dispute / Content Complaint)`,
                "Template": `CM complaining about Alert Service a result of ( Specific Cause from Requirements )`,
                "Ticket": "Yes",
                "Related_CC_&_Not": "Yes"
            },
            // حالات Not related في Mortgage
            "I-Score - Updating Data": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score Related Issues": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability .": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "WRT Complaints": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Receiving facilitys documents": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to CBE NL": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to I-Score": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Control": { "Reason": "Not related", "Requirements": "Not related", "Template": "Not related", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    },
    "Cards": {
        "Credit Card": {
            "Clearance Issuance Policy": {
                "Reason": `•Dissatisfaction with fees, timeline, or prerequisites to obtain a liability clearance letter.(FYI)<br>•The customer is complaining about the bank's policy for issuing a credit card clearance letter (e.g., fees, TAT, requirements).(FYI)`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Request Date:<br>• Specific Cause: (Fee Dispute / TAT Objection / Requirement Dispute)`,
                "Template": `CM complaining about Clearance Issuance Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Assigned Limit": {
                "Reason": `•The credit limit assigned differs from what was requested or approved by underwriting.<br>•The credit limit assigned to the card is different from what was approved or requested.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Approved/Expected Limit:<br>• Actual Limit Assigned:<br>• Specific Cause: (Underwriting Error / System Glitch / Entry Error)`,
                "Template": `CM complaining about Wrong Assigned Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Issuance": {
                "Reason": `•Card issued does not match the customer's application (Wrong product code).<br>•The customer received a credit card of a different type than what they applied for.`,
                "Requirements": `• CC Account :<br>• Requested Card Type:<br>• Card Type actually received:<br>• Application Reference Number:<br>• Specific Cause: (Sales Error / Processing Error / System Default)`,
                "Template": `CM complaining about Wrong Card Issuance a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Closure": {
                "Reason": `•Active card was closed incorrectly due to bank error or wrong account number used.<br>•The bank has closed the wrong credit card.`,
                "Requirements": `• CC Account :<br>• Masked Card Number of card wrongly closed:<br>• Masked Card Number of card that should have been closed:<br>• Closure Date:<br>• Specific Cause: (Ops Error / System Batch Error / Wrong CIF Closed)`,
                "Template": `CM complaining about Wrong Card Closure a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Destructed Card": {
                "Reason": `•Card was destroyed by the branch/courier while it was still valid for delivery/pickup.<br>•The bank mistakenly cancelled or destructed the customer's active credit card.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Approximate date it stopped working:<br>• Specific Cause: (Branch Error / Courier Error / Premature Destruction)`,
                "Template": `CM complaining about Wrongly Destructed Card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Renwal Policy": {
                "Reason": `•Customer objects to the automatic renewal or the criteria used for renewal.(FYI)<br>•The customer is complaining about the bank's policy for renewing credit cards.(FYI)`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Expiry Date:<br>• Specific Cause: (Unwanted Renewal / Renewal Denied / Policy Dispute)`,
                "Template": `CM complaining about Card Renwal Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Limit Request Rejection": {
                "Reason": `•Request to increase credit limit was declined by Credit Policy.<br>•The customer's application for a credit limit increase was rejected.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Date of application:<br>• Rejection Reason:<br>• Specific Cause: (High DBR / I-Score Issue / Policy Decline)`,
                "Template": `CM complaining about Limit Request Rejection a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Balance Certificate Delivery": {
                "Reason": `•Liability certificate issued but not delivered to customer.<br>•A requested certificate for credit card was not delivered.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Date of Request:<br>• Expected Delivery Address:<br>• Specific Cause: (Courier Delay / Wrong Address / Lost in Transit)`,
                "Template": `CM complaining about Balance Certificate Delivery a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Refund Action": {
                "Reason": `•Refund transaction (reversal) applied incorrectly or to the wrong card/account.<br>•Refund applied incorrectly or to the wrong card/account.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Expected Refund Amount:<br>• Original Transaction Details:<br>• Specific Cause: (Wrong Account Credited / Partial Refund / Duplicate Credit)`,
                "Template": `CM complaining about Wrong Refund Action a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Merchant Duplicated Author.": {
                "Reason": `•Merchant blocked the transaction amount twice (Duplicate Authorization Hold).<br>•A merchant processed a single purchase as multiple transactions.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Merchant Name:<br>• Date & Time of purchase:<br>• Specific Cause: (POS Retry Error / System Glitch / Merchant Error)`,
                "Template": `CM complaining about Merchant Duplicated Author. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Type": {
                "Reason": `•Physical card plastic type differs from system product code.<br>•The credit card held is different from what is in the system.`,
                "Requirements": `• CC Account :<br>• Card Type customer holds:<br>• Card Type shown in system:<br>• Specific Cause: (Embossing Error / Production Mismatch / Stock Error)`,
                "Template": `CM complaining about Wrong Card Type a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Unsuccessful Withdrawal": {
                "Reason": `•Cash withdrawal failed at ATM but transaction appears on statement.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• ATM Machine ID/Location:<br>• Date & Time:<br>• Specific Cause: (Dispense Error / Limit Reached / PIN Error)`,
                "Template": `CM complaining about Unsuccessful Withdrawal a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Unsuccessful Deposit": {
                "Reason": `•CDM payment failed but machine took the cash.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Amount Deposited:<br>• Specific Cause: (Jam Error / Hardware Fail / Count Mismatch)`,
                "Template": `CM complaining about Unsuccessful Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delivery Policy": {
                "Reason": `•Complaint regarding card delivery rules.(FYI)`,
                "Requirements": `• CC Account :<br>• Specific policy being disputed:<br>• Specific Cause: (ID Requirement Dispute / Proxy Refusal / Time Restriction)`,
                "Template": `CM complaining about Delivery Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hold Release Delay": {
                "Reason": `•Delay in releasing a hold placed on the card's limit.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Merchant Name:<br>• Hold Amount:<br>• Specific Cause: (Expiry Date Error / System Sync / Manual Release Delay)`,
                "Template": `CM complaining about Hold Release Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Referral Removal Delay": {
                "Reason": `•Delay in removing a referral code or flag from an account.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Date of Request:<br>• Payment Date:<br>• Specific Cause: (Workflow Stuck / Officer Oversight / Batch Delay)`,
                "Template": `CM complaining about Referral Removal Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Type Change": {
                "Reason": `•Request to change credit card type has been delayed or misprocessed.`,
                "Requirements": `• CC Account :<br>• Current Masked Card Number:<br>• Requested Card Type:<br>• Specific Cause: (Migration Failure / Feature Mismatch / Fee Error)`,
                "Template": `CM complaining about Card Type Change a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Deposit Error": {
                "Reason": `•A credit card payment was credited with an incorrect amount.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Date of Payment:<br>• Payment Amount:<br>• Specific Cause: (Counter Error / Keying Error / Slip Mismatch)`,
                "Template": `CM complaining about Deposit Error a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Restricted Merchants": {
                "Reason": `•Transaction declined because merchant is on a restricted list.(FYI)`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Merchant Name:<br>• Specific Cause: (Crypto Block / Gambling Block / Geo-Restriction)`,
                "Template": `CM complaining about Restricted Merchants a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Closure Policy": {
                "Reason": `•Complaint about the bank's policy for closing a credit card.(FYI)`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Specific policy being disputed:<br>• Specific Cause: (Early Closure Fee / Retention Team Issue / Process Dispute)`,
                "Template": `CM complaining about Card Closure Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete TAT": {
                "Reason": `•A service request was not completed within the promised timeframe.`,
                "Requirements": `• CC Account :<br>• Date of Request:<br>• Promised TAT:<br>• Specific Cause: (SLA Breach / Pending Approval / Lost Request)`,
                "Template": `CM complaining about Incomplete TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Installment Processing Delay": {
                "Reason": `•Request to convert a transaction to installment plan has been delayed.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Transaction Details:<br>• Specific Cause: (Merchant Report Delay / System Lag / Booking Error)`,
                "Template": `CM complaining about Installment Processing Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Booking Delay": {
                "Reason": `•Easy Payment Plan request received but booking on system delayed.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Back Office Backlog / System Error / Eligibility Check)`,
                "Template": `CM complaining about EPP Booking Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash on Phone delay": {
                "Reason": `•A request for a "Cash on Phone" facility has been delayed.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Amount Requested:<br>• Specific Cause: (Transfer Delay / Approval Pending / System Glitch)`,
                "Template": `CM complaining about Cash on Phone delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong COP Cancellation": {
                "Reason": `•A request to cancel a "Cash on Phone" (COP) plan was misprocessed.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• COP Reference Number:<br>• Specific Cause: (Officer Error / System Auto-cancel / Misunderstanding)`,
                "Template": `CM complaining about Wrong COP Cancellation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong EPP Enrollment": {
                "Reason": `•EPP booked for wrong transaction, wrong tenor, or without consent.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Input Error / System Default / Wrong Promo Code)`,
                "Template": `CM complaining about Wrong EPP Enrollment a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Available Limit": {
                "Reason": `•The available credit limit displayed for the credit card is incorrect.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Incorrect Available Limit:<br>• Specific Cause: (Shadow Balance / Pending Auth Error / System Sync)`,
                "Template": `CM complaining about Wrong Available Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "External Agency Communication": {
                "Reason": `•Complaint about unprofessional communication from a collection agency.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Agency Name:<br>• Details of incident:<br>• Specific Cause: (Harassment / Privacy Breach / Rude Behavior)`,
                "Template": `CM complaining about External Agency Communication a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•A bank employee mishandled a request related to the credit card.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Branch/Department:<br>• Details of incident:<br>• Specific Cause: (Process Violation / Negligence / Wrong Info)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•A bank employee provided incorrect information about card features or fees.`,
                "Requirements": `• CC Account :<br>• Branch/Department:<br>• Question asked:<br>• Specific Cause: (Training Gap / Product Ignorance / Wrong Guidance)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card BIN": {
                "Reason": `•A transaction is failing because the card's BIN is being read incorrectly.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Error message:<br>• Specific Cause: (Production Batch Error / System Configuration Error)`,
                "Template": `CM complaining about Wrong Card BIN a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•Incorrect data related to the credit card is displayed on digital channels.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Channel:<br>• Description:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Campaign": {
                "Reason": `•Complaint about an EPP campaign (e.g., terms, discount not applied).`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Promo Not Applied / Merchant Not Eligible / Terms Dispute)`,
                "Template": `CM complaining about EPP Campaign a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Data display over Statement": {
                "Reason": `•The statement is formatted incorrectly or unreadable.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Statement Date:<br>• Specific Cause: (Printing Error / Data Field Mismatch / Unintelligible Text)`,
                "Template": `CM complaining about Data display over Statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Overlimit Fees": {
                "Reason": `•An over-limit fee was charged incorrectly.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Statement Date:<br>• Fee Amount:<br>• Specific Cause: (Temp Authorization Impact / Interest Impact / System Error)`,
                "Template": `CM complaining about Wrong Overlimit Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Interest deduction": {
                "Reason": `•The interest amount charged on the statement is incorrect.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Statement Date:<br>• Specific Cause: (Grace Period Dispute / Rate Error / Calculation Days Error)`,
                "Template": `CM complaining about Wrong Interest deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Refund not reflected": {
                "Reason": `•A refund from a merchant has not been credited to the card account.<br>•After assign Chargeback complaint for refund and refund not reflected.`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Merchant Name:<br>• Expected Amount:<br>• Specific Cause: (Acquirer Delay / ARN Tracing Needed / Suspense Account)`,
                "Template": `CM complaining about Refund not reflected a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Mob Number": {
                "Reason": `•The mobile number is not linked to the card, preventing OTPs.`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Correct Mobile Number:<br>• Specific Cause: (Data Entry Omission / Linkage Error / Migration Fail)`,
                "Template": `CM complaining about Missing Mob Number a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Miles Not Shown": {
                "Reason": `•The reward miles earned are not reflecting correctly.`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Statement Date:<br>• Specific Cause: (Calculation Error / Batch Fail / Excluded MCC)`,
                "Template": `CM complaining about Miles Not Shown a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Customer Data": {
                "Reason": `•Key data is missing from the credit card profile.`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Missing Field:<br>• Specific Cause: (KYC Gap / System Deletion / Entry Oversight)`,
                "Template": `CM complaining about Missing Customer Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Fees deduction": {
                "Reason": `•A fee that the customer is not liable for has been deducted.`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Fee Type:<br>• Specific Cause: (Fee Waiver Ignored / Double Charge / Tariff Error)`,
                "Template": `CM complaining about Wrong Fees deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Statement Delivery": {
                "Reason": `•The statement was delivered to a wrong or old address.`,
                "Requirements": `• Masked Card Number:<br>• CC Account :<br>• Address Used:<br>• Specific Cause: (Database Error / Old Address Used / Input Error)`,
                "Template": `CM complaining about Wrong Statement Delivery a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Embossing Name": {
                "Reason": `•The name embossed on the card is incorrect.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Incorrect Name:<br>• Specific Cause: (Typo / System Character Limit / Application Error)`,
                "Template": `CM complaining about Embossing Name a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Expiry": {
                "Reason": `•The physical card's expiry date differs from the system date.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Dates:<br>• Specific Cause: (Batch Error / Renewal Logic Error / System Date Issue)`,
                "Template": `CM complaining about Wrong Expiry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs - Cst Abroad": {
                "Reason": `•Customer abroad unable to lift limits due to doc issues.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Current Location:<br>• Specific Cause: (Submission Failure / Roaming Issue / Doc Rejection)`,
                "Template": `CM complaining about Travel Docs - Cst Abroad a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs - Email": {
                "Reason": `•Issue submitting travel documents via email.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Email Date:<br>• Specific Cause: (Mailbox Full / No Response / Attachment Error)`,
                "Template": `CM complaining about Travel Docs - Email a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs - Did not Submit": {
                "Reason": `•Limits not lifted because bank claims docs were not received.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Destination:<br>• Specific Cause: (Lost Document / Transmission Fail / Customer Forgot)`,
                "Template": `CM complaining about Travel Docs - Did not Submit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs - No SMS": {
                "Reason": `•Confirmation/Request SMS for limit lifting not received.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Mobile:<br>• Specific Cause: (SMS Gateway Fail / Wrong Mobile / Process Delay)`,
                "Template": `CM complaining about Travel Docs - No SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs -Process Objection": {
                "Reason": `•Customer is objecting to the travel document requirement policy.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Objection:<br>• Specific Cause: (Policy Complaint / Inconvenience / Privacy Concern)`,
                "Template": `CM complaining about Travel Docs -Process Objection a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs  - Website Form": {
                "Reason": `•Failure to upload documents via the website form.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Error message:<br>• Specific Cause: (Upload Fail / Form Crash / File Size Limit)`,
                "Template": `CM complaining about Travel Docs  - Website Form a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Travel Docs - Overseas": {
                "Reason": `•Issues using card overseas despite submitting docs.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Location:<br>• Specific Cause: (Decline by Switch / Country Block / Limit Mismatch)`,
                "Template": `CM complaining about Travel Docs - Overseas a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "MasterCard Lounge Related": {
                "Reason": `•Customer denied airport lounge access or wrongly charged.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Lounge name:<br>• Specific Cause: (Card Not Recognized / Free Visits Used / System Down)`,
                "Template": `CM complaining about MasterCard Lounge Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "COP Missing Tenor": {
                "Reason": `•COP booked with missing or incorrect repayment period.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Tenor Requested vs Actual:<br>• Specific Cause: (Product Rule / System limitation / Agent Error)`,
                "Template": `CM complaining about COP Missing Tenor a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong COP Enrollment": {
                "Reason": `•COP facility booked for the wrong amount or without full consent.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Amount:<br>• Specific Cause: (Keying Error / Miscommunication / System Glitch)`,
                "Template": `CM complaining about Wrong COP Enrollment a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Sales Approach": {
                "Reason": `•Aggressive or misleading sales tactics used by an agent.`,
                "Requirements": `• CC Account :<br>• Sales Rep Details:<br>• Specific Cause: (Mis-selling / Harassment / Hidden Info)`,
                "Template": `CM complaining about Sales Approach a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation Related": {
                "Reason": `•Technical issue or error while trying to activate the card.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Channel:<br>• Specific Cause: (Activation Channel Down / Data Mismatch / System Block)`,
                "Template": `CM complaining about Card Activation Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Stock Availability": {
                "Reason": `•Card delayed due to plastic/chip shortage.`,
                "Requirements": `• Branch Name:<br>• Date:<br>• Specific Cause: (Vendor Delay / Chip Shortage / Stock Mismanagement)`,
                "Template": `CM complaining about Cards Stock Availability a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Courier Over Promising": {
                "Reason": `•The courier company provided false delivery promises.`,
                "Requirements": `Policy Number: <br>Pick Up Date: <br>Card status: <br>Courier Calling Party: <br>Calling Party:`,
                "Template": `CM complaining about Courier Over Promising a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Statement Notification": {
                "Reason": `•The customer is not receiving email notifications for e-statements.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Email:<br>• Specific Cause: (Notification Fail / Bounce Back / System Error)`,
                "Template": `CM complaining about E-Statement Notification a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong System Authorization": {
                "Reason": `•System authorized a transaction that should have been declined.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Trans Details:<br>• Specific Cause: (Parameter Error / Limit Bypass / False Decline)`,
                "Template": `CM complaining about Wrong System Authorization a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Corruption": {
                "Reason": `•An active EPP has been corrupted, causing incorrect billing.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Data Corruption / Batch Error / Calculation Bug)`,
                "Template": `CM complaining about EPP Corruption a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Uber Forex Charges": {
                "Reason": `•Dispute over FX fees on Uber transactions.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Amount:<br>• Specific Cause: (DCC Issue / Merchant Billing Country / Policy Complaint)`,
                "Template": `CM complaining about Uber Forex Charges a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Service Instability": {
                "Reason": `•Intermittent failures or instability when using the card.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Specific Cause: (Switch Timeout / Network Jitter / Maintenance Window)`,
                "Template": `CM complaining about Card Service Instability a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispensed Transaction": {
                "Reason": `•An ATM cash advance was debited, but cash was not dispensed.`,
                "Requirements": `• Masked Card Number:<br>• Machine ID:<br>• Date:<br>• Amount:<br>• Missing Amt:<br>• Specific Cause: (Hardware Error / Partial Dispense / Reconciliation)`,
                "Template": `CM complaining about Dispensed Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Trans. Sett. Delay": {
                "Reason": `•Delay in settlement or reversal of an incomplete transaction.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Trans Details:<br>• Specific Cause: (Merchant Not Settling / System Hang / Auto-release Fail)`,
                "Template": `CM complaining about Incomplete Trans. Sett. Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Limit Usage Dissatisfaction": {
                "Reason": `•Dissatisfaction with how holds affect the available limit.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Dissatisfaction Details:<br>• Specific Cause: (Hold Impact / Installment Blocking / Policy Dispute)`,
                "Template": `CM complaining about Limit Usage Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Cancellation Process": {
                "Reason": `•Complaint about the difficulty or policy of cancelling an EPP.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Cancellation Fee Dispute / Process Complexity / Delay)`,
                "Template": `CM complaining about EPP Cancellation Process a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Transaction": {
                "Reason": `•Fraud Claim - Customer denying a transaction.`,
                "Requirements": `• Masked Card Number:<br>• Date:<br>• Amount:<br>• Merchant:<br>• Specific Cause: (Fraud Claim / Card Lost/Stolen / Skimming)`,
                "Template": `CM complaining about Dispute Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Case": {
                "Reason": `•Non-fraud dispute (duplicate charge, service not rendered).`,
                "Requirements": `• Masked Card Number:<br>• Amount:<br>• Merchant:<br>• Reason:<br>• Case ID:<br>• Specific Cause: (Resolution Delay / Unfair Outcome / Document Request)`,
                "Template": `CM complaining about Dispute Case a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Acquirer POS Setup": {
                "Reason": `•Merchant complaining that their POS terminal cannot accept CIB cards.`,
                "Requirements": `• Merchant MID/TID:<br>• Specific Cause: (BIN Range Missing / Terminal config / Routing Error)`,
                "Template": `CM complaining about Acquirer POS Setup a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Balance Certificate delay": {
                "Reason": `•Delay in issuing or delivering the balance certificate.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Date:<br>• Specific Cause: (TAT Breach / Signature Delay / Courier Delay)`,
                "Template": `CM complaining about Balance Certificate delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products terms & conditions.": {
                "Reason": `•Customer complaining about unclear T&Cs.`,
                "Requirements": `• Specific Term:<br>• Specific Cause: (Unfair Terms / Lack of Transparency / Change in Terms)`,
                "Template": `CM complaining about Products terms & conditions. a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products design": {
                "Reason": `•Dissatisfaction with the physical look/quality of the card.`,
                "Requirements": `• Card Type:<br>• Specific Cause: (Ugly Design / Poor Material / Peel Off Issue)`,
                "Template": `CM complaining about Products design a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Suppl. Limit Updating Delay": {
                "Reason": `•Change to supplementary card limit not updated.`,
                "Requirements": `• Primary Masked Card:<br>• Supplementary Masked Card:<br>• Limit:<br>• Specific Cause: (System Latency / Batch Error / Manual Processing)`,
                "Template": `CM complaining about Suppl. Limit Updating Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Stop statement": {
                "Reason": `•Request to stop physical statements not processed.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Date:<br>• Specific Cause: (Flag Not Updated / System Error / Mail House Error)`,
                "Template": `CM complaining about Stop statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card activation delay": {
                "Reason": `•Delay in activating reissued or new card on system.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Request Date:<br>• Specific Cause: (System Block / KYC Pending / Activation Tool Down)`,
                "Template": `CM complaining about Card activation delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Egypt Air complaints": {
                "Reason": `•Issues with CIB-EgyptAir card miles or benefits.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• EgyptAir Plus No:<br>• Specific Cause: (Miles Not Credited / Tier Status Issue / Discount Not Applied)`,
                "Template": `CM complaining about Egypt Air complaints a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Solidarity scheme fees": {
                "Reason": `•Dispute over insurance/solidarity fees on card.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Fee Amount:<br>• Specific Cause: (Unwanted Subscription / Fee Error / Benefit Denial)`,
                "Template": `CM complaining about Solidarity scheme fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Direct Debit Process": {
                "Reason": `•Issues with card auto-payment (not executed, wrong amount).`,
                "Requirements": `• CC Account :<br>• Source Account:<br>• Copy Of TRX :<br>• Specific Cause: (Setup Failure / Payment Missed / Wrong Amount)`,
                "Template": `CM complaining about Direct Debit Process a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Statement Delivery Reprint": {
                "Reason": `•Duplicate past statement request delayed.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Month/Year:<br>• Specific Cause: (Reprint Fee Dispute / Delivery Delay / Quality Issue)`,
                "Template": `CM complaining about Statement Delivery Reprint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Refund is not a payment": {
                "Reason": `•Customer complaining refund didn't count toward min payment.`,
                "Requirements": `• CC Account :<br>• Min Amount Due:<br>• Copy Of TRX :<br>• Specific Cause: (Policy Explanation / System Logic / Late Fee Applied)`,
                "Template": `CM complaining about Refund is not a payment a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Insurance Complaint": {
                "Reason": `•Complaint about Credit Shield or travel insurance.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Product:<br>• Specific Cause: (Claim Rejected / Enrollment Error / Premium Dispute)`,
                "Template": `CM complaining about Insurance Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Complaints": {
                "Reason": `•General EPP complaint (booking, billing, interest).`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Interest Charged Error / Installment Missing / Early Settlement)`,
                "Template": `CM complaining about EPP Complaints a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Renewal fees": {
                "Reason": `•Dispute over annual renewal fee.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Amount:<br>• Specific Cause: (Fee Not Waived / Promo Ignored / High Fee)`,
                "Template": `CM complaining about Card Renewal fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Captured cards": {
                "Reason": `•Credit card swallowed by ATM.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Machine ID:<br>• Specific Cause: (Time Out / Hardware Jam / Card Hotlisted)`,
                "Template": `CM complaining about Captured cards a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Collection Deduction": {
                "Reason": `•Auto-deduction from account to cover card dues (Set-off).`,
                "Requirements": `• Source Account:<br>• Deduction Amount:<br>• Specific Cause: (No Notice / Wrong Amount / Account Hardship)`,
                "Template": `CM complaining about Collection Deduction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Pricing": {
                "Reason": `•Complaint about interest rates or fee transparency.`,
                "Requirements": `• CC Account :<br>• Rate/Fee:<br>• Specific Cause: (Rate Too High / Hidden Fees / Comparison to Competitors)`,
                "Template": `CM complaining about Cards Pricing a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Acquirer Duplication": {
                "Reason": `•POS machine charged the card multiple times for same purchase.`,
                "Requirements": `• CC Account :<br>• Merchant Name:<br>• Slips:<br>• Specific Cause: (Terminal Error / Batch Upload Error / Cashier Error)`,
                "Template": `CM complaining about Acquirer Duplication a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Statement Balance": {
                "Reason": `•Statement closing balance is incorrect.`,
                "Requirements": `• CC Account :<br>• Statement Date:<br>• Discrepancy details:<br>• Specific Cause: (Math Error / Missing Credit / Wrong Debit)`,
                "Template": `CM complaining about Wrong Statement Balance a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card less Deposit": {
                "Reason": `•Cardless payment to credit card at ATM failed.`,
                "Requirements": `• Target Card Number:<br>• Machine ID:<br>• Amount:<br>• Specific Cause: (Credit Delay / Wrong Account Credited / System Reject)`,
                "Template": `CM complaining about Card less Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Limit Increase": {
                "Reason": `•Bank increased credit limit incorrectly.`,
                "Requirements": `• CC Account :<br>• Prev vs New Limit:<br>• Specific Cause: (Policy Cap / System Error / Underwriting Decision)`,
                "Template": `CM complaining about Wrong Limit Increase a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Credit Balance Transfer": {
                "Reason": `•Positive balance transfer from card to account delayed.`,
                "Requirements": `• CC Account :<br>• Masked Card:<br>• Beneficiary Account:<br>• Specific Cause: (Transfer Delay / Fee Applied / Request Rejected)`,
                "Template": `CM complaining about Credit Balance Transfer a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Talabat Offer": {
                "Reason": `•Issue with promotional offer with Talabat.`,
                "Requirements": `• CC Account :<br>• Talabat Order Details:<br>• Offer terms:<br>• Specific Cause: (Voucher Invalid / Points Not Added / Discount Failed)`,
                "Template": `CM complaining about Talabat Offer a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Trade Line Offer": {
                "Reason": `•Issue with promotional offer from Trade Line.`,
                "Requirements": `• CC Account :<br>• Purchase Details:<br>• Specific Cause: (Eligibility Denial / Terms Dispute / Booking Failure)`,
                "Template": `CM complaining about Trade Line Offer a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delivery TAT Objection": {
                "Reason": `•Customer dissatisfied with delivery turnaround time.`,
                "Requirements": `• Masked Card:<br>• Date of Request:<br>• Specific Cause: (Courier Backlog / Remote Area / Logistics Fail)`,
                "Template": `CM complaining about Delivery TAT Objection a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Sup card Limit Renewal Process": {
                "Reason": `•Supplementary spending limit reset logic issue.`,
                "Requirements": `• Primary & Sup Card Numbers:<br>• Description:<br>• Specific Cause: (Reset to Default / Not Carried Forward / System Error)`,
                "Template": `CM complaining about Sup card Limit Renewal Process a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Replacement Procedures": {
                "Reason": `•Complexity or difficulty of the replacement procedure.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Specific Cause: (Too Many Steps / High Fee / ID Requirement)`,
                "Template": `CM complaining about Card Replacement Procedures a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Captured Data": {
                "Reason": `•The bank has incomplete or missing data for the card profile.`,
                "Requirements": `• CC Account :<br>• Missing Field:<br>• Specific Cause: (Scanning Error / Data Entry Miss / System Bug)`,
                "Template": `CM complaining about Missing Captured Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Late Payment Fees": {
                "Reason": `•Late payment fee charged incorrectly.`,
                "Requirements": `• CC Account :<br>• Statement Due Date:<br>• Payment Proof:<br>• Specific Cause: (Payment Posted Late / Grace Period Error / Fee Waiver Req)`,
                "Template": `CM complaining about Late Payment Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Application Follow Up Delay": {
                "Reason": `•No update on new credit card application status.`,
                "Requirements": `• Application Ref No:<br>• Date:<br>• Specific Cause: (Lost Application / Underwriting Queue / Lack of Comms)`,
                "Template": `CM complaining about Application Follow Up Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card less Deposit With OTP": {
                "Reason": `•Issue with cardless payment requiring an OTP.`,
                "Requirements": `• Target Card Number:<br>• Mobile:<br>• Transaction Amount:<br>• Specific Cause: (OTP Not Rec'd / System Reject / Limit Reached)`,
                "Template": `CM complaining about Card less Deposit With OTP a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Misuse": {
                "Reason": `•Credit card being misused by a known person.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Trans Details:<br>• Specific Cause: (Family Fraud / Lost Card Usage / Stolen Card Usage)`,
                "Template": `CM complaining about Card Misuse a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Charges/Int. reversal delay": {
                "Reason": `•Promised reversal of charges/interest not posted.`,
                "Requirements": `• CC Account :<br>• Masked Card Number:<br>• Approval Date:<br>• Specific Cause: (Manual Adjustment Delay / Batch Skip / Oversight)`,
                "Template": `CM complaining about Charges/Int. reversal delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Youth Card Policy": {
                "Reason": `•Complaint about Youth Credit Card policy.(FYI)`,
                "Requirements": `• CC Account :<br>• Policy Point:<br>• Specific Cause: (Low Limit / Age Restriction / Transaction Block)`,
                "Template": `CM complaining about Youth Card Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "FCY Conversion Difference": {
                "Reason": `•Dispute over FX rate/markup applied to intl transaction.`,
                "Requirements": `• CC Account :<br>• Original vs Charged Amount:<br>• Rate:<br>• Specific Cause: (Rate High / Markup Dispute / DCC Error)`,
                "Template": `CM complaining about FCY Conversion Difference a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing EPP Installment": {
                "Reason": `•EPP installment not charged to the statement.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (System Skip / Plan Dropped / Tenor Extension Error)`,
                "Template": `CM complaining about Missing EPP Installment a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Daily Transaction Limit": {
                "Reason": `•Complaint about the credit card's daily transaction limit.`,
                "Requirements": `• CC Account :<br>• Limit:<br>• Specific Cause: (Limit Too Low / System Limit Error / Request to Increase)`,
                "Template": `CM complaining about Daily Transaction Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong EPP Statement Schedule": {
                "Reason": `•EPP installment details displayed incorrectly on statement.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Billing Cycle Error / Booking Date Issue / System Glitch)`,
                "Template": `CM complaining about Wrong EPP Statement Schedule a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Charge Back TAT": {
                "Reason": `•Chargeback resolution time exceeded SLA.`,
                "Requirements": `• Original Dispute Ref:<br>• Date:<br>• Specific Cause: (Network Delay / Analyst Backlog / Doc Request Delay)`,
                "Template": `CM complaining about Charge Back TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Credit Balance over ClosedCard": {
                "Reason": `•Credit balance sitting on a closed card cannot be recovered.`,
                "Requirements": `• Closed Card Masked Number:<br>• Amount:<br>• Specific Cause: (Transfer Failure / Cheque Issuance Delay / Account Link Fail)`,
                "Template": `CM complaining about Credit Balance over ClosedCard a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Hold Not Released": {
                "Reason": `•Hold remains on limit after settlement/cancellation.`,
                "Requirements": `• Masked Card Number:<br>• Merchant:<br>• Amount:<br>• Specific Cause: (Merchant No-Show / System Error / Expiry Delay)`,
                "Template": `CM complaining about Hold Not Released a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Address Setup": {
                "Reason": `•Card/Statements linked to completely wrong address.`,
                "Requirements": `• CC Account :<br>• Correct vs Incorrect Address:<br>• Specific Cause: (Typo / Wrong City / Old Address / System Default)`,
                "Template": `CM complaining about Wrong Address Setup a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong EPP Enroll with Interest": {
                "Reason": `•Promotional 0% EPP booked with interest by mistake.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Promo Code Missing / Wrong Plan Selected / System Error)`,
                "Template": `CM complaining about Wrong EPP Enroll with Interest a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong CC Replacement": {
                "Reason": `•Replacement card received with incorrect details.`,
                "Requirements": `• CC Account :<br>• New Card Details Issue:<br>• Specific Cause: (Ops Error / Product Mapping Error / Request Error)`,
                "Template": `CM complaining about Wrong CC Replacement a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong EPP Booking": {
                "Reason": `•EPP booked for wrong transaction or wrong terms.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Selection Error / System Match Error / Agent Error)`,
                "Template": `CM complaining about Wrong EPP Booking a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Clearance Delivery Delay": {
                "Reason": `•Delay in delivery of requested clearance letter.`,
                "Requirements": `• CC Account :<br>• Masked Card:<br>• Request Date:<br>• Specific Cause: (Courier Issue / Signing Delay / Lost Letter)`,
                "Template": `CM complaining about Clearance Delivery Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "COP Cancel Not Implemented": {
                "Reason": `•Request to cancel COP facility was not implemented.`,
                "Requirements": `• CC Account :<br>• COP Ref No:<br>• Request Date:<br>• Specific Cause: (Workflow Stuck / Pending Interest Calc / Oversight)`,
                "Template": `CM complaining about COP Cancel Not Implemented a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Load Wallet Fees": {
                "Reason": `•Dispute over fees for loading digital wallet with CC.`,
                "Requirements": `• Wallet Name:<br>• Fee Amount:<br>• Specific Cause: (Cash Advance Fee Applied / System Categorization / Dispute)`,
                "Template": `CM complaining about Load Wallet Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing EPP Statement Schedule": {
                "Reason": `•EPP amortization schedule missing from statement.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Display Error / Printing Error / System Bug)`,
                "Template": `CM complaining about Missing EPP Statement Schedule a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Cancellation Delay": {
                "Reason": `•Delay in processing EPP cancellation request.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Foreclosure Calculation Delay / System Error / SLA Breach)`,
                "Template": `CM complaining about EPP Cancellation Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Facility Request Status": {
                "Reason": `•No update on status of credit facility request.`,
                "Requirements": `• CC Account :<br>• Request Date:<br>• Specific Cause: (Underwriting Backlog / Missing Docs / Communication Gap)`,
                "Template": `CM complaining about Facility Request Status a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Features": {
                "Reason": `•Dissatisfaction or inquiry regarding card benefits.`,
                "Requirements": `• CC Account :<br>• Feature:<br>• Specific Cause: (Benefit Removed / Misunderstanding / Vendor Issue)`,
                "Template": `CM complaining about Card Features a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Closure without Cst permission": {
                "Reason": `•Credit card cancelled by bank without consent.`,
                "Requirements": `• Masked Card Number:<br>• Closure Reason:<br>• Specific Cause: (Risk Block / Auto-closure Error / Policy Violation)`,
                "Template": `CM complaining about Closure without Cst permission a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "E-Statement": {
                "Reason": `•Technical issue with credit card e-statement.`,
                "Requirements": `• CC Account :<br>• Month:<br>• Specific Cause: (Corrupt File / Password Issue / Not Generated)`,
                "Template": `CM complaining about E-Statement a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fawry- Incomplete transaction": {
                "Reason": `•Credit card payment via Fawry failed but debited.`,
                "Requirements": `• Masked Card Number:<br>• Fawry Details:<br>• Specific Cause: (Provider Timeout / Settlement Fail / Double Debit)`,
                "Template": `CM complaining about Fawry- Incomplete transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Interest Calc. Methodology": {
                "Reason": `•Query or dispute over credit card interest math.`,
                "Requirements": `• CC Account :<br>• Statement Date:<br>• Specific Cause: (Calculation Logic / Rate Base Dispute / Days Count)`,
                "Template": `CM complaining about Interest Calc. Methodology a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Monthly Cash withdrawal limit": {
                "Reason": `•Complaint about the monthly cash advance limit.`,
                "Requirements": `• CC Account :<br>• Limit:<br>• Specific Cause: (Policy Complaint / Need Higher Limit / System Error)`,
                "Template": `CM complaining about Monthly Cash withdrawal limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Posted Charges due to Dispute": {
                "Reason": `•Charges/Interest posted for a transaction under dispute.`,
                "Requirements": `• CC Account :<br>• Disputed Trans Details:<br>• Specific Cause: (System Auto-charge / Provisional Credit Missing / Adjustment Fail)`,
                "Template": `CM complaining about Posted Charges due to Dispute a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Statements Not-uploaded": {
                "Reason": `•Online e-statement for credit card not available.`,
                "Requirements": `• CC Account :<br>• Month:<br>• Specific Cause: (Upload Failure / Batch Error / Profile Linkage)`,
                "Template": `CM complaining about Statements Not-uploaded a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Usage/Rejected Transaction": {
                "Reason": `•Valid transaction rejected at POS/Online.`,
                "Requirements": `• CC Account :<br>• Decline Reason:<br>• Specific Cause: (Suspected Fraud / Limit / Tech Error / Wrong CVV)`,
                "Template": `CM complaining about Usage/Rejected Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Activation": {
                "Reason": `•Wrong credit card activated, possibly deactivating current one.`,
                "Requirements": `• CC Account :<br>• Status Details:<br>• Specific Cause: (System Error / Wrong Card Activated / Process Error)`,
                "Template": `CM complaining about Wrong Card Activation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Captured Data": {
                "Reason": `•Application data entered incorrectly.`,
                "Requirements": `• CC Account :<br>• Correct vs Incorrect Data:<br>• Specific Cause: (Typo / OCR Error / Staff Negligence)`,
                "Template": `CM complaining about Wrongly Captured Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash On Phone": {
                "Reason": `•General complaint or inquiry about Cash on Phone.`,
                "Requirements": `• CC Account :<br>• Issue:<br>• Specific Cause: (Eligibility / Transfer Fail / Rate Dispute)`,
                "Template": `CM complaining about Cash On Phone a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Zero interest instalments": {
                "Reason": `•Issue with zero-interest installment plan (e.g., interest charged).`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:<br>• Specific Cause: (Merchant Code Error / Promo Not Active / System Error)`,
                "Template": `CM complaining about Zero interest instalments a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Over Limit fees": {
                "Reason": `•Dispute over credit card over-limit fee.`,
                "Requirements": `• CC Account :<br>• Fee Amount:<br>• Specific Cause: (Fee Dispute / One-time Waiver Req / Tech Error)`,
                "Template": `CM complaining about Over Limit fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Direct debit timing cycle": {
                "Reason": `•Complaint about direct debit timing.(FYI)`,
                "Requirements": `• CC Account :<br>• Cycle Details:<br>• Specific Cause: (Cycle Mismatch / Weekend Effect / System Delay)`,
                "Template": `CM complaining about Direct debit timing cycle a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Limit Dissatisfaction": {
                "Reason": `•General dissatisfaction with assigned credit limit.`,
                "Requirements": `• CC Account :<br>• Limit:<br>• Specific Cause: (Income Mismatch / Policy Complaint / Retention Request)`,
                "Template": `CM complaining about Limit Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Reactivation delay": {
                "Reason": `•Delay in reactivating a suspended card.`,
                "Requirements": `• CC Account :<br>• Request Date:<br>• Specific Cause: (Risk Approval Pending / System Sync / Staff Delay)`,
                "Template": `CM complaining about Card Reactivation delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Replacement Delay": {
                "Reason": `•Replacement card not delivered within SLA.`,
                "Requirements": `• CC Account :<br>• CP:<br>• Specific Cause: (Stock Issue / System Error / Ops Backlog)`,
                "Template": `CM complaining about Card Replacement Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Replacement Fees": {
                "Reason": `•Dispute over credit card replacement fee.`,
                "Requirements": `• CC Account :<br>• Fee Amount:<br>• Specific Cause: (Exempt Customer / Defective Card / Fee Waiver Req)`,
                "Template": `CM complaining about Card Replacement Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Credit Card Shield Fees": {
                "Reason": `•Dispute over "Credit Card Shield" insurance fee.`,
                "Requirements": `• CC Account :<br>• Amount:<br>• Specific Cause: (Service Not Requested / Calculation Error / Refund Req)`,
                "Template": `CM complaining about Credit Card Shield Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Held Item": {
                "Reason": `•Dispute over a hold on the card limit.`,
                "Requirements": `• CC Account :<br>• Amount:<br>• Specific Cause: (Security Block / Dispute Hold / System Error)`,
                "Template": `CM complaining about Held Item a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Rejected transaction": {
                "Reason": `•Complaint about a rejected transaction (General).`,
                "Requirements": `• Masked Card Number:<br>• Decline Code:<br>• Specific Cause: (Insufficient Funds / Fraud Rule / Tech Error)`,
                "Template": `CM complaining about Rejected transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Statement - Opened Envelop": {
                "Reason": `•Statement delivered unsealed/damaged.`,
                "Requirements": `• Policy Number: <br>• Calling party:<br>• Specific Cause: (Privacy Breach / Courier Mishandling / Poor Quality)`,
                "Template": `CM complaining about Statement - Opened Envelop a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Supplementary issuance delay": {
                "Reason": `•Delay in issuing requested supplementary card.`,
                "Requirements": `• CC Account :<br>• Request Date:<br>• Specific Cause: (KYC Issue / Production Delay / Courier Delay)`,
                "Template": `CM complaining about Supplementary issuance delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Misleading Information": {
                "Reason": `•Misinformed about card features or fees during sale.`,
                "Requirements": `• CC Account :<br>• Staff Name:<br>• Specific Cause: (Sales Misrepresentation / Wrong Advice / Hidden Fees)`,
                "Template": `CM complaining about Misleading Information a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Direct Debit instruction delay": {
                "Reason": `•Delay in setting up auto-payment direct debit.`,
                "Requirements": `• CC Account :<br>• Request Date:<br>• Specific Cause: (Ops Delay / Form Lost / System Error)`,
                "Template": `CM complaining about Direct Debit instruction delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Deducted Fees": {
                "Reason": `•Fee wrongly deducted from card account.`,
                "Requirements": `• CC Account :<br>• Fee Type:<br>• Specific Cause: (System Glitch / Manual Error / Policy Error)`,
                "Template": `CM complaining about Wrongly Deducted Fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Stamp Duty": {
                "Reason": `•Dispute over government stamp duty charges.`,
                "Requirements": `• CC Account :<br>• Amount:<br>• Specific Cause: (Exempt Status / Calculation Error / Double Charge)`,
                "Template": `CM complaining about Stamp Duty a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Fund raising": {
                "Reason": `•Unauthorized/disputed fund-raising deduction from card.`,
                "Requirements": `• CC Account :<br>• Charity:<br>• Specific Cause: (Unintended Donation / Wrong Amount / Refund Req)`,
                "Template": `CM complaining about Fund raising a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Interest Calculation": {
                "Reason": `•Interest amount on statement is incorrect.`,
                "Requirements": `• CC Account :<br>• Disputed Amt:<br>• Specific Cause: (Arithmetic Error / Rate Mismatch / Days Count)`,
                "Template": `CM complaining about Wrong Interest Calculation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Termination": {
                "Reason": `•Termination/cancellation request has not been processed.`,
                "Requirements": `• CC Account :<br>• Date:<br>• Specific Cause: (Retention Offer / Payout Request / Process Feedback)`,
                "Template": `CM complaining about Card Termination a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Offers Complaint": {
                "Reason": `•Offer or discount not applied.`,
                "Requirements": `• CC Account :<br>• Offer:<br>• Specific Cause: (Bonus Not Credited / Terms Dispute / Ineligibility)`,
                "Template": `CM complaining about Cards Offers Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong SMS": {
                "Reason": `•Incorrect SMS notification related to card.`,
                "Requirements": `• CC Account :<br>• SMS Text:<br>• Specific Cause: (Template Error / Wrong Data / Delayed Alert)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Data Entry": {
                "Reason": `•Incorrect data linked to card profile.`,
                "Requirements": `• CC Account :<br>• Field:<br>• Specific Cause: (Spelling Error / Wrong DOB / Wrong ID)`,
                "Template": `CM complaining about Wrong Data Entry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "statement delivery Delay": {
                "Reason": `•Physical statement arriving late.`,
                "Requirements": `• Registered Address:<br>• Specific Cause: (Courier Delay / Mail House Delay / Printing Issue)`,
                "Template": `CM complaining about statement delivery Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SMS Not Sent": {
                "Reason": `•Transaction done but no alert received.`,
                "Requirements": `• Trans Date:<br>• Specific Cause: (Gateway Fail / Network Issue / DND)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Dispute": {
                "Reason": `•ATM withdrawal dispute closed without resolution.`,
                "Requirements": `• CP#:<br>• Specific Cause: (Premature Closure / Oversight / Evidence Ignored)`,
                "Template": `CM complaining about Incomplete Dispute a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Cash Deposit": {
                "Reason": `•CDM deposit interrupted - money taken, no credit.`,
                "Requirements": `• CP#:<br>• Machine ID:<br>• Amount:<br>• Specific Cause: (Jam Error / Hardware Fail / Count Mismatch)`,
                "Template": `CM complaining about Incomplete Cash Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Trans Refund delay": {
                "Reason": `•Delay in receiving refund for a disputed transaction.`,
                "Requirements": `• Decision Date:<br>• Specific Cause: (Settlement Delay / Manual Credit Pending)`,
                "Template": `CM complaining about Dispute Trans Refund delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Clearance letter Delay": {
                "Reason": `•Delay in issuing/delivering liability clearance letter.`,
                "Requirements": `• Request Date:<br>• Specific Cause: (SLA Breach / Signatory Delay)`,
                "Template": `CM complaining about Clearance letter Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "ChargeBack Request": {
                "Reason": `•Customer wishes to initiate a chargeback.`,
                "Requirements": `• Trans ID:<br>• Specific Cause: (Goods Not Received / Fraud / Double Billing)`,
                "Template": `CM complaining about ChargeBack Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card renewal issuance delay": {
                "Reason": `•Renewal card not generated or delivered on time.`,
                "Requirements": `• Expiry Date:<br>• Specific Cause: (Batch Skip / System Error / Hold on Account)`,
                "Template": `CM complaining about Card renewal issuance delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Cancellation fees refund": {
                "Reason": `•EPP cancelled on system but cancellation fees applied.`,
                "Requirements": `• Plan ID:<br>• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Cancellation fees refund a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Transactions Refund": {
                "Reason": `•Merchant did not refund EPP transaction or delay.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Transactions Refund a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Active Inst Not cancelled": {
                "Reason": `•Transaction refunded but EPP still active on system.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Active Inst Not cancelled a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Not enrolled": {
                "Reason": `•Merchant failed to enroll transaction as EPP.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Not enrolled a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Wrong Enroll with interest": {
                "Reason": `•0% interest requested but plan booked with interest.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Wrong Enroll with interest a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Wrong Enroll tenor": {
                "Reason": `•EPP booked with incorrect repayment period.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Wrong Enroll tenor a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Applied admin fees": {
                "Reason": `•Dispute over admin fees applied instead of 0% EPP.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Applied admin fees a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "EPP Admin Fees not refunded": {
                "Reason": `•EPP cancelled but admin fees not reversed.`,
                "Requirements": `• o Issue details:<br>o Merchant Name:<br>o Merchant location/branch:<br>o Date of visit:<br>o Card Number:<br>o Transaction date:<br>o Transaction amount:<br>o Copy of trnx from Card400:<br>o Required action:`,
                "Template": `CM complaining about EPP Admin Fees not refunded a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Purchasing without Pin Code": {
                "Reason": `•PIN not requested for transaction (Contactless).`,
                "Requirements": `• Masked Card Number:<br>• Merchant Name:<br>• Transaction Date & Amount:<br>• Trans ID:<br>• Specific Cause: (Security Concern / Limit Configuration / Terminal Setting)`,
                "Template": `CM complaining about Purchasing without Pin Code a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Secured Code Complaint": {
                "Reason": `•Issue with 3D Secure (OTP) for online purchase.`,
                "Requirements": `• Masked Card Number:<br>• Date and Time of Trail #<br>• Mobile on Cortex #<br>• SD # <br>• Trans ID:<br>• Specific Cause: (OTP Not Rec'd / System Page Error / Auth Fail)`,
                "Template": `CM complaining about Secured Code Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related في Credit Card
            "RPA-Limit": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "RPA-Limit Incr. wrong decision": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score - Updating Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "I-Score Related Issues": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Third Party Refund Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability .": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "WRT Complaints": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Bulk Source Complaint": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Master Card Authorization": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Master Card Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Dynamic Currency Conversion": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Batch": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CITI Credit Shield": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "CITI Wrong migrated card": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Receiving facility documents": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Fraud": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to CBE NL": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Reporting to I-Score": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Debit Card": {
            "Add Acc. to Debit card delay": {
                "Reason": `•Delay in linking a secondary account (Savings/Current) to the existing debit card.<br>•A customer's request to link an additional account to their debit card has been delayed.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Date of Request:<br>• SR Number (if available):<br>• Account to Link:<br>• Request Date:<br>• Specific Cause: (System Error / Branch Delay / Backend Sync Fail)`,
                "Template": `CM complaining about Add Acc. to Debit card delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Reactivation delay": {
                "Reason": `•Request to unblock or reactivate a suspended debit card is pending beyond SLA.<br>•A request to reactivate a suspended or inactive debit card has been delayed.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Date of Reactivation Request:<br>• Reason for deactivation (if known):<br>• Specific Cause: (Risk Approval Pending / System Latency / Staff Oversight)`,
                "Template": `CM complaining about Card Reactivation delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Replacement Delay": {
                "Reason": `•Replacement debit card (Lost/Damaged) not issued or delivered within timeframe.<br>•The customer has not received their replacement debit card within the promised timeframe.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Request Channel :<br>• Request Date :<br>• CP:`,
                "Template": `CM complaining about Card Replacement Delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Replacement Fees": {
                "Reason": `•Dispute over the fee charged for replacing the debit card.<br>•The customer is disputing a fee charged for replacing their debit card.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Specific Cause: (Fee Waiver Ignored / Defective Card / System Auto-charge)`,
                "Template": `CM complaining about Card Replacement Fees on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cash Withdrawal Fees": {
                "Reason": `•Dispute over fees charged for ATM withdrawal (On-us vs Off-us network fees).<br>•The customer is disputing a fee charged for a cash withdrawal transaction using their debit card.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Amount:<br>• Fee Amount Charged:<br>• ATM ID:<br>• Specific Cause: (Network Fee Dispute / Exempt Account Charged / Tariff Error)`,
                "Template": `CM complaining about Cash Withdrawal Fees on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Rejected transaction": {
                "Reason": `•Transaction declined at POS or ATM.<br>•A transaction was declined at a merchant despite the customer having sufficient funds.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Merchant Name:<br>• Error message (if seen):<br>• Decline Reason:<br>• Specific Cause: (Insufficient Funds / Daily Limit Reached / PIN Error / Tech Error)`,
                "Template": `CM complaining about Rejected transaction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Supplementary issuance delay": {
                "Reason": `•Delay in issuing a supplementary debit card for a family member.<br>•There is a delay in issuing a supplementary debit card that was requested.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Primary Account Holder Name:<br>• Supplementary Cardholder Name:<br>• Date of Request:<br>• SR Number (if available):<br>• Specific Cause: (KYC Issue / Production Delay / Courier Delay)`,
                "Template": `CM complaining about Supplementary issuance delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit Card Fees": {
                "Reason": `•General complaint about annual fees or issuance fees.<br>•The customer is disputing the annual or periodic fee for their debit card.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Fee Type:<br>• Specific Cause: (Fee Not Disclosed / Double Deduction / Payroll Exemption Missed)`,
                "Template": `CM complaining about Debit Card Fees on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Features": {
                "Reason": `•Dissatisfaction with card benefits (Withdrawal limits, Rewards).<br>•The customer has a complaint or inquiry about a specific feature of their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Specific feature in question:<br>• Description of the issue/inquiry:<br>• Feature:<br>• Specific Cause: (Limit Too Low / No Points Earned / Feature Removed)`,
                "Template": `CM complaining about Card Features on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Closure without Cst permission": {
                "Reason": `•Debit card closed/stopped by bank without customer request.<br>•The customer's debit card was cancelled or closed without their consent.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Approximate Date of Closure:<br>• Closure Date:<br>• Specific Cause: (Risk Block / Dormancy Policy / System Error)`,
                "Template": `CM complaining about Closure without Cst permission on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Monthly Cash withdrawal limit": {
                "Reason": `•Complaint regarding the monthly cap on cash withdrawals.<br>•The customer is complaining about the monthly cash withdrawal limit on their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Current Monthly Limit:<br>• Issue faced due to the limit:<br>• Limit:<br>• Specific Cause: (Policy Complaint / Request to Increase / System Limit Error)`,
                "Template": `CM complaining about Monthly Cash withdrawal limit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Usage/Rejected Transaction": {
                "Reason": `•Valid transaction rejected despite having funds.<br>•The customer is complaining about a rejected debit card transaction.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Merchant Name:<br>• Error message (if seen):<br>• Merchant/ATM:<br>• Specific Cause: (False Positive Fraud / Chip Error / Connection Timeout)`,
                "Template": `CM complaining about Usage/Rejected Transaction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Activation": {
                "Reason": `•Card status on system does not match physical status.<br>•The wrong debit card (e.g., an old or replacement card) was activated.`,
                "Requirements": `• Account number to be linked:<br>• Masked Card Number of the card that should be active:<br>• Masked Card Number of the card that was wrongly activated:<br>• Status:<br>• Specific Cause: (Activation Failed / Wrong Card Activated / System Glitch)`,
                "Template": `CM complaining about Wrong Card Activation on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Captured Data": {
                "Reason": `•Application data for the card entered incorrectly.<br>•The bank has incorrect data linked to the debit card (e.g., wrong mobile number for OTPs).`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Incorrect Data on record:<br>• Correct Data:<br>• Specific Cause: (Typo in Name / Wrong ID / Wrong Address)`,
                "Template": `CM complaining about Wrongly Captured Data on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Termination": {
                "Reason": `•Process of cancelling the debit card.<br>•A customer's request to terminate/cancel their debit card has not been processed.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Date of Termination Request:<br>• SR Number (if available):<br>• Specific Cause: (Cancellation Delay / Fee Applied Post-Closure / Process Feedback)`,
                "Template": `CM complaining about Card Termination on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Offers Complaint": {
                "Reason": `•Issues with offers linked to Debit Card usage (Cashback/Discounts).<br>•The customer is complaining about an offer or discount that was not applied.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Merchant Name:<br>• Offer Details:<br>• Transaction Date & Amount:<br>• Offer:<br>• Specific Cause: (Cashback Not Credited / Merchant Refusal / Eligibility Dispute)`,
                "Template": `CM complaining about Cards Offers Complaint on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card activation delay": {
                "Reason": `•Physical card delivered but activation on system is delayed.<br>•There is a delay in activating a new or reissued debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Date of Activation Request:<br>• Channel used for activation:<br>• Delivery Date:<br>• Specific Cause: (System Block / KYC Update Needed / Activation Tool Down)`,
                "Template": `CM complaining about Card activation delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Renewal fees": {
                "Reason": `•Dispute over the annual renewal fee deducted from account.<br>•The customer is disputing a fee charged for the renewal of their debit card.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Fee Amount Charged:<br>• Date Charged:<br>• Amount:<br>• Specific Cause: (Fee Dispute / Promo Waiver Missed / Double Charge)`,
                "Template": `CM complaining about Card Renewal fees on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Captured Cards": {
                "Reason": `•Card swallowed by ATM and not returned.<br>•The customer's debit card was captured by an ATM machine.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• ATM Machine ID/Location:<br>• Date & Time card was captured:<br>• Specific Cause: (Time Out / Hardware Jam / Card Hotlisted / PIN Tries Exceeded)`,
                "Template": `CM complaining about Captured Cards on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Pricing": {
                "Reason": `•Complaint about the cost structure of the debit card.(FYI)<br>•The customer is complaining that the pricing of the debit card was not transparent or is too high.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Specific fee being disputed:<br>• Reason for complaint:<br>• Fee Structure:<br>• Specific Cause: (High Fees / Competitor Comparison / Value for Money)`,
                "Template": `CM complaining about Cards Pricing on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Type Change": {
                "Reason": `•Delay or error in upgrading/downgrading card tier.<br>•A request to change the customer's debit card type has been delayed or processed incorrectly.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Requested Card Type:<br>• Date of Request:<br>• Specific Cause: (Migration Failure / Wrong Card Issued / Fee Mismatch)`,
                "Template": `CM complaining about Card Type Change on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Statement Balance": {
                "Reason": `•Balance shown on ATM/Receipt differs from Account Balance.<br>•The debit card transactions listed on the statement are incorrect, leading to a wrong balance.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Statement Date:<br>• Details of the incorrect transaction(s):<br>• Date:<br>• Specific Cause: (Ledger vs Available / Hold Not Cleared / Sync Error)`,
                "Template": `CM complaining about Wrong Statement Balance on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card less Deposit": {
                "Reason": `•Deposit via ATM without card failed or credited wrongly.<br>•Customer is experiencing an issue with a card-less deposit transaction at an ATM.`,
                "Requirements": `• Target Account Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Amount Deposited:<br>• Description of the issue:<br>• Account/Card:<br>• Specific Cause: (Wrong Account Credited / System Reject / Timeout)`,
                "Template": `CM complaining about Card less Deposit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delivery TAT Objection": {
                "Reason": `•Delivery of new/replaced card took longer than promised.(FYI)<br>•The customer is dissatisfied with the standard delivery timeframe (TAT).(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Date of Request:<br>• Promised Delivery TAT:<br>• Days Delayed:<br>• Specific Cause: (Courier Backlog / Remote Area / Logistics Fail)`,
                "Template": `CM complaining about Delivery TAT Objection on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Account Linkage": {
                "Reason": `•Card linked to the wrong primary account.<br>•The debit card is linked to the wrong account, causing transactions to be debited from an unintended source.`,
                "Requirements": `• Masked Card Number:<br>• Incorrectly linked Account Number:<br>• Correct Account Number to be linked:<br>• Specific Cause: (Officer Error / System Default Error / Linkage Request Ignored)`,
                "Template": `CM complaining about Wrong Account Linkage on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Replacement Procedures": {
                "Reason": `•Complaint about the steps required to replace a card.<br>•The customer is complaining about the complexity or difficulty of the procedure.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Description of the procedural issue:<br>• Specific Cause: (Inconvenience / Branch Visit Required / ID Requirement)`,
                "Template": `CM complaining about Card Replacement Procedures on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Assigned Limit": {
                "Reason": `•Daily purchase/withdrawal limit set incorrectly on the card.<br>•The daily or per-transaction limits assigned to the debit card are incorrect.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Incorrect Limit assigned (POS/ATM):<br>• Correct Limit that was expected:<br>• Specific Cause: (Profile Error / Tier Mismatch / System Glitch)`,
                "Template": `CM complaining about Wrong Assigned Limit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Closure": {
                "Reason": `•Card closed in error (e.g. Bank closed valid card).<br>•The bank has closed the wrong debit card (e.g., closed primary instead of supplementary).`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Masked Card Number of card wrongly closed:<br>• Masked Card Number of card that should have been closed:<br>• Closure Date:<br>• Specific Cause: (Ops Error / Wrong Card Selected / System Batch Error)`,
                "Template": `CM complaining about Wrong Card Closure on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Issuance": {
                "Reason": `•Card issued is different from what was applied for.<br>•The customer received a debit card of a different type than what they applied for.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Requested Card Type:<br>• Card Type actually received:<br>• Specific Cause: (Sales Error / Product Mapping Error / Stock Substitution)`,
                "Template": `CM complaining about Wrong Card Issuance on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "FCY Conversion Difference": {
                "Reason": `•Dispute over exchange rate/markup on international debit transaction.<br>•The customer is disputing the foreign currency exchange rate applied.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Transaction Date:<br>• Amount charged in home currency:<br>• Disputed exchange rate:<br>• Amount:<br>• Specific Cause: (Rate Dispute / High Markup / Dynamic Currency Conversion)`,
                "Template": `CM complaining about FCY Conversion Difference on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Charge Back TAT": {
                "Reason": `•Dispute resolution time for debit transaction exceeded SLA.<br>•The turnaround time for a chargeback request has been exceeded.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Original Dispute Reference Number:<br>• Date of Dispute:<br>• Promised TAT:<br>• Specific Cause: (Network Delay / Analyst Backlog / Doc Request Delay)`,
                "Template": `CM complaining about Charge Back TAT on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong DC Replacement": {
                "Reason": `•Replacement card details (Name/Type) are incorrect.<br>•The customer received a replacement debit card with incorrect details.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Masked Card Number of the old card:<br>• Details of the incorrect information on the new card:<br>• Specific Cause: (Data Entry Error / Production Error / Wrong Request)`,
                "Template": `CM complaining about Wrong DC Replacement on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit Card International Limit": {
                "Reason": `•Complaint about the spending limit allowed abroad.<br>•The customer is complaining about the international limits on their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Current International Limit:<br>• Issue faced due to the limit:<br>• Specific Cause: (Limit Too Low / CBE Regulation / Card Tier Restriction)`,
                "Template": `CM complaining about Debit Card International Limit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Available Limit": {
                "Reason": `•Available balance for spending on card is incorrect (Shadow Balance).<br>•The available spending limit displayed for the debit card is incorrect.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Incorrect Limit displayed:<br>• Correct Limit expected:<br>• Specific Cause: (Hold Not Released / System Sync Error / Pending Debits)`,
                "Template": `CM complaining about Wrong Available Limit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Type": {
                "Reason": `•Physical plastic does not match the account segment/tier.<br>•The customer claims the card they are holding is a different type from what's in the system.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Card Type customer holds:<br>• Card Type shown in system:<br>• Card No:<br>• Specific Cause: (Embossing Error / Stock Error / Upgrade Not Reflected)`,
                "Template": `CM complaining about Wrong Card Type on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Staff error or poor service regarding debit card issues.<br>•A bank employee mishandled a request related to the customer's debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Detailed description of the incident:<br>• Specific Cause: (Process Violation / Negligence / Wrong Action)`,
                "Template": `CM complaining about Mishandling on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to answer inquiries about debit card usage/fees.<br>•A bank employee provided incorrect information about debit card features.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Branch/Department:<br>• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Question asked and incorrect information provided:<br>• Specific Cause: (Training Gap / Wrong Info Provided / Inability to Help)`,
                "Template": `CM complaining about Lack Of Knowledge on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Misleading Information": {
                "Reason": `•Customer given incorrect info about limits or fees.<br>•The customer was given misleading information about a debit card product.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Details of the misleading information:<br>• Name of Sales Staff (if known):<br>• Date of application/sale:<br>• Specific Cause: (Sales Misrepresentation / Hidden Fees / Wrong Advice)`,
                "Template": `CM complaining about Misleading Information on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card BIN": {
                "Reason": `•Card issued with a BIN that causes acceptance issues online/POS.<br>•A transaction is failing because the card's BIN is being read incorrectly.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Merchant/ATM where it failed:<br>• Error message (if any):<br>• BIN:<br>• Specific Cause: (Production Error / Configuration Error / Old Stock)`,
                "Template": `CM complaining about Wrong Card BIN on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•Card details shown on Mobile/Online banking are wrong.<br>•Incorrect data related to the debit card is displayed on digital channels.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Channel (IB, App):<br>• Description of incorrect data:<br>• Screenshot (if possible):<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Refund not reflected": {
                "Reason": `•Refund from merchant not credited back to the linked account.<br>•A refund from a merchant has not been credited to the customer's account.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Merchant Name:<br>• Expected Refund Amount:<br>• Date refund was initiated by merchant:<br>• ARN (Acquirer Reference Number) if available:<br>• Specific Cause: (Acquirer Delay / ARN Tracing Needed / Suspense Account)`,
                "Template": `CM complaining about Refund not reflected on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Mob Number": {
                "Reason": `•No SMS received because mobile number missing on card profile.<br>•The customer's mobile number is not linked to their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Correct Mobile Number to be linked:<br>• Specific Cause: (Entry Omission / Linkage Error / System Deletion)`,
                "Template": `CM complaining about Missing Mob Number on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Daily Transaction Limit": {
                "Reason": `•Transaction declined due to daily velocity/amount cap.<br>•The customer is complaining about the daily transaction limit on their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Current Daily Limit:<br>• Issue faced due to the limit:<br>• Specific Cause: (Limit Reached / Request to Increase / System Error)`,
                "Template": `CM complaining about Daily Transaction Limit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Embossing Name": {
                "Reason": `•Name printed on the card is spelled incorrectly.<br>•The name embossed on the debit card is incorrect or misspelled.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Incorrect Name on Card:<br>• Correct Name as per bank records:<br>• Specific Cause: (Typo / Character Limit / Application Error)`,
                "Template": `CM complaining about Embossing Name on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Expiry": {
                "Reason": `•Card issued with incorrect validity period.<br>•The expiry date on the physical debit card differs from the expiry date in the system.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Expiry Date on Card:<br>• Expiry Date in system (if known):<br>• Specific Cause: (Batch Error / Renewal Logic Error / Date Issue)`,
                "Template": `CM complaining about Wrong Expiry on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation Related": {
                "Reason": `•Issues enabling the card via ATM/IVR/App.<br>•The customer is facing a technical issue or error while trying to activate their card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Channel used for activation:<br>• Error message received:<br>• Specific Cause: (Channel Down / PIN Setup Fail / System Block)`,
                "Template": `CM complaining about Card Activation Related on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Stock Availability": {
                "Reason": `•Issuance delayed due to plastic shortage.<br>•The customer is unable to get a new or replacement debit card due to lack of card stock.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Branch Name:<br>• Date of Visit:<br>• Card type requested:<br>• Specific Cause: (Vendor Delay / Chip Shortage / Branch Stock Out)`,
                "Template": `CM complaining about Cards Stock Availability on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Courier Over Promising": {
                "Reason": `•Courier missed the promised delivery slot.<br>•The courier company provided incorrect information or a false delivery promise.`,
                "Requirements": `• Policy Number: <br>• Pick Up Date: <br>• Card status: <br>• Courier Calling Party: <br>• Calling Party:`,
                "Template": `CM complaining about Courier Over Promising on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Uber Forex Charges": {
                "Reason": `•Dispute over foreign fees on Uber (Local ride charged as Intl).<br>•The customer is complaining about FX or additional fees applied to Uber transactions.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Transaction Date & Amount:<br>• Disputed Fee Amount:<br>• Specific Cause: (DCC Issue / Merchant Billing Location / Policy Dispute)`,
                "Template": `CM complaining about Uber Forex Charges on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispensed Transaction": {
                "Reason": `•ATM dispensed cash but account debited (or partial dispense).<br>•An ATM debited the account but did not dispense cash correctly.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Transaction Amount:<br>• Missing Amount:<br>• Customer Mobile Number:<br>• CP#:<br>• Specific Cause: (Hardware Error / Reconciliation Issue / Reversal Fail)`,
                "Template": `CM complaining about Dispensed Transaction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Limit Usage Dissatisfaction": {
                "Reason": `•Customer unhappy with the standard limits assigned to the card.<br>•The customer is dissatisfied with how the debit card limits are applied.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Description of dissatisfaction:<br>• Limit:<br>• Specific Cause: (Limit Too Low for Needs / Upgrade Request / Policy Complaint)`,
                "Template": `CM complaining about Limit Usage Dissatisfaction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Transaction": {
                "Reason": `•Customer denies authorizing a debit transaction.<br>•Customer is denying a transaction and reporting it as fraudulent.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Merchant Name:<br>• Calling Party (CP#):<br>• Specific Cause: (Fraud Claim / Lost Card Usage / Skimming / Double Debit)`,
                "Template": `CM complaining about Dispute Transaction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete TAT": {
                "Reason": `•Service request pending beyond SLA.<br>•A service request related to the debit card was not completed within the promised timeframe.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• SR Number:<br>• Date of Request:<br>• Promised TAT:<br>• Type of Request:<br>• Specific Cause: (SLA Breach / Lost Request / Pending Approval)`,
                "Template": `CM complaining about Incomplete TAT on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit Card Service Instability": {
                "Reason": `•Intermittent declines or system timeouts.<br>•The customer is experiencing intermittent failures or instability when using their card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Date/Time:<br>• Specific Cause: (Switch Issues / Network Jitter / Maintenance Window)`,
                "Template": `CM complaining about Debit Card Service Instability on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Youth Card Policy": {
                "Reason": `•Complaint regarding restrictions on Youth/Student cards.(FYI)<br>•The customer has a complaint about a policy related to the Youth Debit Card.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Policy:<br>• Specific Cause: (Age Limit / Spending Limit / Merchant Block)`,
                "Template": `CM complaining about Youth Card Policy on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products terms & conditions.": {
                "Reason": `•Customer objects to T&Cs (Fees, Limits, Liability).(FYI)<br>•The customer is complaining that the debit card's T&Cs are unclear.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Specific Term/Condition being disputed:<br>• How it was not explained clearly:<br>• Clause:<br>• Specific Cause: (Unfair Terms / Lack of Transparency / Change in Terms)`,
                "Template": `CM complaining about Products terms & conditions. on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Products design": {
                "Reason": `•Customer dislikes the look/feel of the debit card.<br>•The customer is providing negative feedback on the physical design or material of the card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Feedback on the card design:<br>• Card Type:<br>• Specific Cause: (Aesthetic Complaint / Quality Issue / Peel Off)`,
                "Template": `CM complaining about Products design on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Misuse": {
                "Reason": `•Suspected misuse by third party/family member.<br>•The customer is reporting that their card is being misused by a known person.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Details of the unauthorized transactions:<br>• Name of person misusing the card (if known):<br>• Trans ID:<br>• Specific Cause: (Family Fraud / Unauthorized Access / Stolen PIN)`,
                "Template": `CM complaining about Card Misuse on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Delivery Policy": {
                "Reason": `•Complaint about delivery rules.(FYI)<br>•The customer is complaining about the bank's policy for debit card delivery.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Specific policy being disputed:<br>• Specific Cause: (Proxy Refusal / Time Restriction / ID Requirement)`,
                "Template": `CM complaining about Delivery Policy on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Restricted Merchants": {
                "Reason": `•Transaction declined due to blocked MCC.(FYI)<br>•The customer's debit card transaction was declined because the merchant is on a restricted list.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Merchant Name:<br>• Transaction Date & Time:<br>• Specific Cause: (Bank Policy Block / CBE Regulation / Risk Rule)`,
                "Template": `CM complaining about Restricted Merchants on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Closure Policy": {
                "Reason": `•Dissatisfaction with card closure rules.(FYI)<br>•The customer is complaining about the bank's policy for closing a debit card.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Specific policy being disputed:<br>• Specific Cause: (Linked Account Rule / Fee applied / Process Dispute)`,
                "Template": `CM complaining about Card Closure Policy on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Acquirer POS Setup": {
                "Reason": `•Card declined on CIB POS due to terminal config.<br>•A merchant is complaining that their POS terminal is not set up correctly to accept the bank's cards.`,
                "Requirements": `• Merchant Name:<br>• Terminal ID:<br>• Description of the issue:<br>• Specific Cause: (BIN Range Missing / Routing Error / Terminal Error)`,
                "Template": `CM complaining about Acquirer POS Setup a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Data Entry": {
                "Reason": `•Typo in name or details on system application.<br>•Customer data was entered incorrectly during the application process.`,
                "Requirements": `• Account number to be linked:<br>• Masked Card Number (if applicable):<br>• Incorrect data that was entered:<br>• Correct data:<br>• Specific Cause: (Spelling Error / Wrong DOB / Wrong ID)`,
                "Template": `CM complaining about Wrong Data Entry on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mark up fees": {
                "Reason": `•Dispute over markup charged on foreign currency transactions.<br>•The customer is disputing the foreign transaction markup fee.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Transaction Date & Amount:<br>• Markup Fee amount:<br>• Specific Cause: (Rate Dispute / High Markup / Refund Req)`,
                "Template": `CM complaining about Mark up fees on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SMS Not Sent": {
                "Reason": `•Transaction completed but no SMS alert received.<br>•The customer is not receiving SMS alerts for transactions made with their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Registered Mobile Number:<br>• Details of transaction:<br>• Specific Cause: (Gateway Fail / Network Issue / DND / System Delay)`,
                "Template": `CM complaining about SMS Not Sent on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "International Limit": {
                "Reason": `•Issue with specific international monthly limit.<br>•The customer is complaining about the international spending or withdrawal limits on their debit card.`,
                "Requirements": `• Fake ACC :<br>• Masked Card :<br>• Available Limit :<br>• Copy of transactions :<br>• Specific Cause: (Limit Too Low / Transaction Declined / Policy Complaint)`,
                "Template": `CM complaining about International Limit on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispute Transaction (Repeated)": {
                "Reason": `•Customer is denying a transaction and reporting it as fraudulent.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Merchant Name:<br>• Calling Party (CP#):<br>• Specific Cause: (Fraud Claim / Lost Card Usage / Skimming / Double Debit)`,
                "Template": `CM complaining about Dispute Transaction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "ChargeBack Request": {
                "Reason": `•Customer wishes to initiate a chargeback for a debit card transaction.`,
                "Requirements": `• Account Number:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Merchant Name:<br>• Reason Of Dispute:<br>• Trans ID:<br>• Specific Cause: (Goods Not Received / Defective / Double Billing)`,
                "Template": `CM complaining about ChargeBack Request on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Material": {
                "Reason": `•The customer is complaining about the physical quality or material of their debit card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Description of quality issue:<br>• Specific Cause: (Chip Fall Out / Plastic Break / Lamination Peel)`,
                "Template": `CM complaining about Card Material on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Issuance Policy": {
                "Reason": `•The customer is complaining about the bank's policy for issuing a new card.(FYI)`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Specific policy being disputed:<br>• Specific Cause: (Account Balance Requirement / Age Rule / Score)`,
                "Template": `CM complaining about Card Issuance Policy on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Closure": {
                "Reason": `•General complaint regarding card closure.`,
                "Requirements": `• Masked Card Number:<br>• Reason for Closure:<br>• Specific Cause: (Delay / Fee Applied / Process Dispute)`,
                "Template": `CM complaining about Card Closure on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation": {
                "Reason": `•General complaint regarding card activation.`,
                "Requirements": `• Masked Card Number:<br>• Activation Method Used:<br>• Specific Cause: (Instruction Fail / Timeout / Data Error)`,
                "Template": `CM complaining about Card Activation on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Courier Attitude": {
                "Reason": `•Complaint about delivery person's behavior.`,
                "Requirements": `• Policy Number:<br>• Pick Up Date:<br>• Card status:<br>• Courier Calling Party:<br>• Specific Cause: (Rude / Unprofessional / Refused Delivery)`,
                "Template": `CM complaining about Courier Attitude on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Bonus Points Related": {
                "Reason": `•Loyalty points accumulation/redemption issue.`,
                "Requirements": `• Copy from Transactions:<br>• Transactions Date :<br>• Masked Card Number:<br>• Account number to be linked:<br>• Specific Cause: (Points Missing / Redemption Fail / Expiry Dispute)`,
                "Template": `CM complaining about Bonus Points Related on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong SMS": {
                "Reason": `•The customer received an incorrect SMS notification related to their card.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Mobile:<br>• SMS Content:<br>• Last digits of card:<br>• Date received:<br>• Specific Cause: (Template Error / Wrong Data / Data Mapping Error)`,
                "Template": `CM complaining about Wrong SMS on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Alert Service": {
                "Reason": `•The customer is not receiving SMS alerts for their transactions.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Mobile:<br>• SMS Content:<br>• Date received:<br>• Specific Cause: (Service Stop / Fee Error / Content Issue)`,
                "Template": `CM complaining about Alert Service on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Embossing Name": {
                "Reason": `•Name printed on card differs from application.`,
                "Requirements": `• Card number :<br>• Account:<br>• Request Channel:<br>• Correct name:<br>• Specific Cause: (Typo / Spelling Error / Title Error)`,
                "Template": `CM complaining about Wrong Embossing Name on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Debit card Issuance delay": {
                "Reason": `•New card generation delayed.`,
                "Requirements": `• Account:<br>• Request date:<br>• Request channel:<br>• Specific Cause: (Stock Issue / System Error / Ops Backlog)`,
                "Template": `CM complaining about Debit card Issuance delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card renewal issuance delay": {
                "Reason": `•Renewal card not generated on time.`,
                "Requirements": `• Account:<br>• Masked#<br>• Expiry Date#<br>• Specific Cause: (Batch Skip / System Error / Hold on Account)`,
                "Template": `CM complaining about Card renewal issuance delay on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Delivery": {
                "Reason": `•General delivery issue (delivered to wrong address/person).`,
                "Requirements": `• Card Number:<br>• Card type:<br>• Embossed on:<br>• Consignment Number:<br>• Agent name:<br>• Reason of Complaint: (Customer didn't know receiver / Wrong address)`,
                "Template": `CM complaining about Card Delivery on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Packing": {
                "Reason": `•Card envelope damaged or open.`,
                "Requirements": `• Masked Number: <br>• Account: <br>• Card Embossed Date: <br>• Courier company: <br>• Pick Up date: <br>• Policy Number:`,
                "Template": `CM complaining about Card Packing on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Purchasing without Pin Code": {
                "Reason": `•PIN not requested for transaction (Contactless).<br>•A POS transaction was processed without requiring a PIN.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Merchant Name:<br>• Transaction Date & Amount:<br>• Trans ID:<br>• Specific Cause: (Security Concern / Limit Configuration / Terminal Setting)`,
                "Template": `CM complaining about Purchasing without Pin Code on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Secured Code Complaint": {
                "Reason": `•Issue with 3D Secure (OTP) for online purchase.`,
                "Requirements": `• Masked Card Number:<br>• Account number to be linked:<br>• Date and Time of Trail :<br>• Mobile on Cortex/Card400:<br>• ticket number # <br>• Specific Cause: (OTP Not Received / System Page Error / Auth Fail)`,
                "Template": `CM complaining about Secured Code Complaint on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related في Debit Card
            "Fraud": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Business Banking Online Issue": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Business Banking DC Activation": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Master Card Authorization": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Master Card Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Missing Captured Data": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Dynamic Currency Conversion": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrongly Destructed Card": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Parameter": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "MasterCard Lounge Related": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong System Authorization": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Third Party Refund Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Dispute Case": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Forms availability .": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Transparency & pricing disclos": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Acquirer Duplication": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Prepaid Card": {
            "Wrong Card Type": {
                "Reason": `•Prepaid card issued does not match the requested type (e.g. Generic vs ISIC vs Payroll).<br>•The customer received a prepaid card of a different type than what they requested.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Requested Card Type:<br>• Card Type actually received:<br>• Specific Cause: (Issuance Error / Bulk File Error / Stock Substitution)`,
                "Template": `CM complaining about Wrong Card Type a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•Staff error or poor service regarding prepaid card issuance or services.<br>•A bank employee mishandled a request related to the customer's prepaid card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Branch/Department:<br>• Date & Time of Incident:<br>• Name/Description of Staff (if known):<br>• Detailed description of the incident:<br>• Specific Cause: (Process Violation / Negligence / Wrong Info Provided)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•Staff unable to answer inquiries about prepaid limits, fees, or reload methods.<br>•A bank employee provided incorrect information about prepaid card features, fees, or loading procedures.`,
                "Requirements": `• CM ID:<br>• Branch/Department:<br>• Date & Time of Interaction:<br>• Name/Description of Staff (if known):<br>• Question asked and incorrect information provided:<br>• Specific Cause: (Training Gap / Wrong Guidance / Info Unavailable)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•Card details (Balance/History) shown incorrectly on ATM or Portal.<br>•Incorrect data related to the prepaid card is displayed on digital channels.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Channel (IB, App):<br>• Description of incorrect data:<br>• Screenshot (if possible):<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Expiry": {
                "Reason": `•Card issued with incorrect validity period.<br>•The expiry date on the physical prepaid card is different from the expiry date in the bank's system.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Expiry Date on Card:<br>• Expiry Date in system (if known):<br>• Specific Cause: (Batch Error / Production Error / Date Logic Fail)`,
                "Template": `CM complaining about Wrong Expiry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Limit Usage Dissatisfaction": {
                "Reason": `•Customer unhappy with the regulatory limits (CBE) on prepaid cards.<br>•The customer is dissatisfied with the spending or loading limits on their prepaid card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Specific Limit in question:<br>• Reason for dissatisfaction:<br>• Specific Cause: (Limit Too Low / Regulation Complaint / Reload Limit Reached)`,
                "Template": `CM complaining about Limit Usage Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation Related": {
                "Reason": `•Failure to activate card via ATM, IVR, or SMS.<br>•The customer is facing a technical issue or error while trying to activate their prepaid card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Channel used for activation:<br>• Error message received:<br>• Specific Cause: (PIN Setup Fail / Host Timeout / Card Status Block)`,
                "Template": `CM complaining about Card Activation Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete TAT": {
                "Reason": `•Service request pending beyond SLA.<br>•A service request related to the prepaid card was not completed within the promised timeframe.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• SR Number:<br>• Promised TAT:<br>• Type of Request:<br>• Specific Cause: (SLA Breach / Lost Request / System Queue)`,
                "Template": `CM complaining about Incomplete TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Acquirer POS Setup": {
                "Reason": `•Card declined on CIB POS due to terminal configuration (BIN Range).<br>•A merchant is complaining that their POS terminal is not set up correctly to accept the bank's prepaid cards.`,
                "Requirements": `• Merchant Name & ID:<br>• Terminal ID:<br>• Description of the issue:<br>• Specific Cause: (BIN Range Missing / Routing Error / Terminal Error)`,
                "Template": `CM complaining about Acquirer POS Setup a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Closure Policy": {
                "Reason": `•Complaint about the process or fees to close the prepaid card and refund balance.(FYI)<br>•The customer is complaining about the bank's policy for closing a prepaid card.(FYI)`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Specific policy being disputed:<br>• Specific Cause: (Refund Fee Dispute / Process Complexity / Delay)`,
                "Template": `CM complaining about Card Closure Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Trans. Sett. Delay": {
                "Reason": `•Transaction authorized but pending settlement for an extended period.<br>•The reversal for a failed prepaid card transaction has been delayed.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Original Transaction Date & Amount:<br>• Merchant Name:<br>• Auth Code:<br>• Specific Cause: (Merchant Not Settling / System Hang / Auto-release Fail)`,
                "Template": `CM complaining about Incomplete Trans. Sett. Delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Captured cards": {
                "Reason": `•Prepaid card swallowed by ATM and not returned.<br>•The customer's prepaid card was captured by an ATM machine.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• ATM Machine ID/Location:<br>• Date & Time card was captured:<br>• Specific Cause: (Time Out / Hardware Jam / Card Hotlisted / PIN Tries)`,
                "Template": `CM complaining about Captured cards a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Termination": {
                "Reason": `•Delay or issue in the final cancellation of the card.<br>•A customer's request to terminate/cancel their prepaid card has not been processed.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Date of Termination Request:<br>• SR Number (if available):<br>• Specific Cause: (Cancellation Delay / Refund of Residual Balance / Error)`,
                "Template": `CM complaining about Card Termination a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Closure without Cst permission": {
                "Reason": `•Card closed by bank without request (e.g. KYC expiry / Risk).<br>•The customer's prepaid card was cancelled or closed without their consent.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Remaining Balance (if known):<br>• Approximate Date of Closure:<br>• Specific Cause: (Risk Block / KYC Deficiency / Dormancy Policy)`,
                "Template": `CM complaining about Closure without Cst permission a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Activation": {
                "Reason": `•Card status on system mismatch (Active vs Inactive).<br>•The wrong prepaid card was activated, possibly deactivating the customer's intended card.`,
                "Requirements": `• Masked Card Number of the card that should be active:<br>• Masked Card Number of the card that was wrongly activated:<br>• Status:<br>• Specific Cause: (Activation Tool Failure / System Glitch / Wrong Status)`,
                "Template": `CM complaining about Wrong Card Activation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Captured Data": {
                "Reason": `•Applicant data entered incorrectly during issuance.<br>•The bank has incorrect data linked to the prepaid card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Incorrect Data on record:<br>• Correct Data:<br>• Specific Cause: (National ID Typo / Wrong Name / Wrong Mobile No)`,
                "Template": `CM complaining about Wrongly Captured Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Rejected transaction": {
                "Reason": `•Transaction declined on POS or ATM.<br>•A transaction was declined despite the customer having sufficient funds on the prepaid card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Transaction Date & Time:<br>• Transaction Amount:<br>• Merchant Name:<br>• Error Code:<br>• Specific Cause: (Insufficient Funds / Limit Reached / PIN Error / Tech Error)`,
                "Template": `CM complaining about Rejected transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Payroll Balance transfer delay": {
                "Reason": `•Delay in crediting the salary/funds from employer to the prepaid card.<br>•For a payroll prepaid card, there has been a delay in the transfer of salary to the card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Employer Name:<br>• Expected Payment Date:<br>• Expected Amount:<br>• Specific Cause: (Bulk File Delay / Bank Processing Delay / System Error)`,
                "Template": `CM complaining about Payroll Balance transfer delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Request": {
                "Reason": `•General inquiry or non-financial request regarding the card.<br>•The customer is making a service request related to their prepaid card.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Details of the service request:<br>• Specific Cause: (Balance Inquiry / Statement Request / Info Update)`,
                "Template": `CM complaining about Customer Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispensed Transaction": {
                "Reason": `•Cash not dispensed at ATM but debited from card.<br>•An ATM debited the prepaid card but did not dispense cash correctly.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Machine Number (ID):<br>• Date & Time:<br>• Transaction Amount:<br>• Missing Amount:<br>• CP#:<br>• Specific Cause: (Hardware Error / Network Timeout / Reversal Fail)`,
                "Template": `CM complaining about Dispensed Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dynamic Currency Conversion": {
                "Reason": `•Dispute regarding fees/rate when paying abroad.<br>•The customer was charged in their home currency instead of the local currency without consent.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Merchant name:<br>• Transaction slip showing the currency conversion:<br>• Specific Cause: (Cross-Border Fee / Markup Dispute / DCC Error)`,
                "Template": `CM complaining about Dynamic Currency Conversion a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Charge Back TAT": {
                "Reason": `•Dispute resolution took longer than scheme regulations.<br>•The turnaround time for a chargeback request on a disputed prepaid card transaction has been exceeded.`,
                "Requirements": `• CM ID:<br>• Masked Card Number:<br>• Original Dispute Reference Number:<br>• Date of Dispute:<br>• Promised TAT:<br>• Specific Cause: (Network Delay / Analyst Backlog / Doc Request)`,
                "Template": `CM complaining about Charge Back TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong SMS": {
                "Reason": `•Incorrect SMS notification related to prepaid card.`,
                "Requirements": `• CM ID:<br>• Mobile:<br>• SMS Content:<br>• Specific Cause: (Template Error / Data Mapping Error / Delayed Alert)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Data Entry": {
                "Reason": `•Customer data entered incorrectly during update/app.`,
                "Requirements": `• CM ID:<br>• Incorrect data:<br>• Specific Cause: (Spelling Error / Wrong DOB / Wrong ID)`,
                "Template": `CM complaining about Wrong Data Entry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SMS Not Sent": {
                "Reason": `•Transaction done but no SMS alert received.`,
                "Requirements": `• Trans Date:<br>• Specific Cause: (Gateway Fail / Network Issue / DND / System Delay)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Dispute": {
                "Reason": `•ATM withdrawal dispute closed without resolution.`,
                "Requirements": `• CP#:<br>• Case Ref:<br>• Specific Cause: (Premature Closure / Oversight / Evidence Ignored)`,
                "Template": `CM complaining about Incomplete Dispute a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Cash Deposit": {
                "Reason": `•CDM deposit interrupted - money taken, no credit.`,
                "Requirements": `• CP#:<br>• Machine ID:<br>• Amount:<br>• Specific Cause: (Jam Error / Hardware Fail / Count Mismatch)`,
                "Template": `CM complaining about Incomplete Cash Deposit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Chargeback Request": {
                "Reason": `•Customer wishes to initiate a chargeback for a prepaid card transaction.`,
                "Requirements": `• Trans ID:<br>• Specific Cause: (Goods Not Received / Defective / Double Billing)`,
                "Template": `CM complaining about Chargeback Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Packing": {
                "Reason": `•Prepaid card envelope damaged or unsealed.`,
                "Requirements": `• Masked Number: <br>• Account: <br>• Card Embossed Date: <br>• Courier company: <br>• Pick Up date: <br>• Policy Number:`,
                "Template": `CM complaining about Card Packing a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Material": {
                "Reason": `•Quality issue with physical prepaid card.`,
                "Requirements": `• CM ID:<br>• Description:<br>• Specific Cause: (Chip Fall Out / Plastic Break / Lamination Peel)`,
                "Template": `CM complaining about Card Material a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Issuance Policy": {
                "Reason": `•Complaint about eligibility rules for prepaid cards.(FYI)`,
                "Requirements": `• CM ID:<br>• Specific policy:<br>• Specific Cause: (Age Restriction / ID Requirement / Max Card Count)`,
                "Template": `CM complaining about Card Issuance Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation Policy": {
                "Reason": `•Complaint about requirements to activate (e.g. Registered Mobile).(FYI)`,
                "Requirements": `• CM ID:<br>• Specific rule:<br>• Specific Cause: (Inconvenience / Mobile Mismatch / Policy Dispute)`,
                "Template": `CM complaining about Card Activation Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Alert Service": {
                "Reason": `•Issue with subscription to SMS alerts.`,
                "Requirements": `• CM ID:<br>• Details:<br>• Specific Cause: (Service Stop / Fee Error / Content Issue)`,
                "Template": `CM complaining about Alert Service a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Embossing Name": {
                "Reason": `•Name printed on card differs from application.`,
                "Requirements": `• CM ID:<br>• Request Channel:<br>• Correct name:<br>• Specific Cause: (Typo / Spelling Error / Title Error)`,
                "Template": `CM complaining about Wrong Embossing Name a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Available Limit": {
                "Reason": `•Balance or limits shown do not match actual funds.`,
                "Requirements": `• CM ID:<br>• Amount:<br>• Specific Cause: (Shadow Balance / Pending Debits / System Sync Error)`,
                "Template": `CM complaining about Wrong Available Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Secured Code Complaint": {
                "Reason": `•Issue with OTP (3D Secure) for online payments.`,
                "Requirements": `• CM ID:<br>• Trans ID:<br>• Specific Cause: (OTP Not Rec'd / System Page Error / Auth Fail)`,
                "Template": `CM complaining about Secured Code Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            // حالات Not related لـ Prepaid Card
            "Wrong Comp on other CM Profile": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Cards Stock Availability": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Third Party Refund Delay": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "FCY Conversion Difference": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        },
        "Meeza": {
            "Captured cards": {
                "Reason": `•Meeza card retained by ATM and not returned to customer.`,
                "Requirements": `• CM ID:<br>• Machine ID:<br>• Specific Cause: (Time Out / Hardware Jam / Card Hotlisted / PIN Tries Exceeded)`,
                "Template": `CM complaining about Captured cards a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Issuance delay": {
                "Reason": `•Delay in generating or delivering the physical Meeza card.`,
                "Requirements": `• CM ID:<br>• Date of App:<br>• Specific Cause: (Stock Issue / System Error / Govt Payroll Bulk Delay)`,
                "Template": `CM complaining about Card Issuance delay a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Termination": {
                "Reason": `•Process of closing or cancelling the Meeza card.`,
                "Requirements": `• CM ID:<br>• Date:<br>• Specific Cause: (Cancellation Delay / Refund of Residual Balance / Process Feedback)`,
                "Template": `CM complaining about Card Termination a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Rejected transaction": {
                "Reason": `•Meeza transaction declined despite sufficient funds.`,
                "Requirements": `• CM ID:<br>• Merchant Name:<br>• Specific Cause: (Domestic Switch Down / Insufficient Funds / PIN Error / Limit Reached)`,
                "Template": `CM complaining about Rejected transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Closure without Cst permission": {
                "Reason": `•Card closed by bank without request (e.g. KYC expiry).`,
                "Requirements": `• CM ID:<br>• Date:<br>• Specific Cause: (Risk Block / KYC Deficiency / Dormancy Policy)`,
                "Template": `CM complaining about Closure without Cst permission a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Activation": {
                "Reason": `•The wrong Meeza card was activated.`,
                "Requirements": `• CM ID:<br>• Status Details:<br>• Specific Cause: (Activation Tool Failure / System Glitch / Wrong Status)`,
                "Template": `CM complaining about Wrong Card Activation a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrongly Captured Data": {
                "Reason": `•Applicant data entered incorrectly during issuance.`,
                "Requirements": `• CM ID:<br>• Incorrect data:<br>• Specific Cause: (National ID Typo / Wrong Name / Wrong Mobile No)`,
                "Template": `CM complaining about Wrongly Captured Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dispensed Transaction": {
                "Reason": `•Cash not dispensed at ATM but debited from card.`,
                "Requirements": `• CM ID:<br>• Machine ID:<br>• Amount:<br>• Missing Amt:<br>• Specific Cause: (Hardware Error / Meeza Network Timeout / Reversal Fail)`,
                "Template": `CM complaining about Dispensed Transaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong deduction": {
                "Reason": `•Unidentified fee or debit on the prepaid balance.`,
                "Requirements": `• CM ID:<br>• Amount:<br>• Merchant:<br>• Specific Cause: (Unknown Fee / Double Debit / System Error)`,
                "Template": `CM complaining about Wrong deduction on his/her card a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Missing Mobile Number": {
                "Reason": `•Mobile number not linked to Meeza card profile.`,
                "Requirements": `• CM ID:<br>• Correct Mobile:<br>• Specific Cause: (Entry Omission / Linkage Error / System Deletion)`,
                "Template": `CM complaining about Missing Mobile Number a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Dynamic Currency Conversion": {
                "Reason": `•Dispute over fees on local transaction processed as international.(FYI)`,
                "Requirements": `• CM ID:<br>• Merchant Name:<br>• Specific Cause: (Cross-Border Fee Applied / Currency Misunderstanding / Merchant Error)`,
                "Template": `CM complaining about Dynamic Currency Conversion a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "FCY Conversion Difference": {
                "Reason": `•Dispute over FX rate applied to Meeza transaction.(FYI)`,
                "Requirements": `• CM ID:<br>• Original vs Charged Amt:<br>• Specific Cause: (Service Not Allowed / Markup Dispute / Rate Error)`,
                "Template": `CM complaining about FCY Conversion Difference a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Charge Back TAT": {
                "Reason": `•Chargeback resolution took longer than Meeza regulations.`,
                "Requirements": `• Original Dispute Ref:<br>• Date:<br>• Specific Cause: (National Switch Delay / Analyst Backlog / Doc Request)`,
                "Template": `CM complaining about Charge Back TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Available Limit": {
                "Reason": `•Balance on the Meeza card is incorrect or not reflecting.`,
                "Requirements": `• CM ID:<br>• Amount:<br>• Specific Cause: (Shadow Balance / Pending Debits / System Sync Error)`,
                "Template": `CM complaining about Wrong Available Limit a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Card Type": {
                "Reason": `•Issued Generic instead of Payroll (or vice versa).`,
                "Requirements": `• CM ID:<br>• Requested vs Actual Type:<br>• Specific Cause: (Issuance Error / Bulk File Error / Product Mapping)`,
                "Template": `CM complaining about Wrong Card Type a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Mishandling": {
                "Reason": `•A bank employee mishandled a Meeza card request.`,
                "Requirements": `• CM ID:<br>• Branch/Dept:<br>• Specific Cause: (Refusal to Service / Wrong Info / Negligence)`,
                "Template": `CM complaining about Mishandling a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Lack Of Knowledge": {
                "Reason": `•A bank employee provided incorrect information about Meeza features.`,
                "Requirements": `• CM ID:<br>• Query:<br>• Specific Cause: (Training Gap / Wrong Guidance / Info Unavailable)`,
                "Template": `CM complaining about Lack Of Knowledge a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Displayed Data": {
                "Reason": `•Incorrect Meeza data displayed on digital channels.`,
                "Requirements": `• CM ID:<br>• Channel:<br>• Specific Cause: (Mapping Error / Cache Issue / Data Sync Fail)`,
                "Template": `CM complaining about Wrong Displayed Data a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Expiry": {
                "Reason": `•Physical card expiry differs from system date.`,
                "Requirements": `• CM ID:<br>• Dates:<br>• Specific Cause: (Batch Error / Production Error / Date Logic Fail)`,
                "Template": `CM complaining about Wrong Expiry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Limit Usage Dissatisfaction": {
                "Reason": `•Dissatisfaction with spending or loading limits on Meeza card.`,
                "Requirements": `• CM ID:<br>• Specific Limit:<br>• Specific Cause: (Limit Too Low / Regulation Complaint / Upgrade Request)`,
                "Template": `CM complaining about Limit Usage Dissatisfaction a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Cards Stock Availability": {
                "Reason": `•Branch ran out of instant Meeza plastic.`,
                "Requirements": `• CM ID:<br>• Branch Name:<br>• Specific Cause: (Inventory Error / Vendor Delay / High Demand)`,
                "Template": `CM complaining about Cards Stock Availability a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation Related": {
                "Reason": `•Technical issue while activating Meeza card.`,
                "Requirements": `• CM ID:<br>• Channel:<br>• Specific Cause: (PIN Setup Fail / Host Timeout / Card Status Block)`,
                "Template": `CM complaining about Card Activation Related a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete TAT": {
                "Reason": `•Meeza service request pending beyond SLA.`,
                "Requirements": `• CM ID:<br>• Request Type:<br>• Specific Cause: (SLA Breach / Lost Request / System Queue)`,
                "Template": `CM complaining about Incomplete TAT a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong SMS": {
                "Reason": `•Incorrect SMS notification related to Meeza card.`,
                "Requirements": `• CM ID:<br>• Mobile:<br>• SMS Content:<br>• Specific Cause: (Template Error / Data Mapping Error / Delayed Alert)`,
                "Template": `CM complaining about Wrong SMS a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Data Entry": {
                "Reason": `•Incorrect data linked to Meeza profile.`,
                "Requirements": `• CM ID:<br>• Field:<br>• Specific Cause: (Spelling Error / Wrong DOB / Wrong ID)`,
                "Template": `CM complaining about Wrong Data Entry a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "SMS Not Sent": {
                "Reason": `•No SMS alert received for transaction.`,
                "Requirements": `• Trans Date:<br>• Specific Cause: (Gateway Fail / Network Issue / DND / System Delay)`,
                "Template": `CM complaining about SMS Not Sent a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Incomplete Dispute": {
                "Reason": `•Meeza withdrawal dispute closed without resolution.`,
                "Requirements": `• CP#:<br>• Specific Cause: (Premature Closure / Oversight / Evidence Ignored)`,
                "Template": `CM complaining about Incomplete Dispute a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Chargeback Request": {
                "Reason": `•Customer wishes to initiate a chargeback for Meeza card.`,
                "Requirements": `• Trans ID:<br>• Specific Cause: (Goods Not Received / Defective / Double Billing)`,
                "Template": `CM complaining about Chargeback Request a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Packing": {
                "Reason": `•Meeza card envelope damaged or unsealed.`,
                "Requirements": `• Masked Number: <br>• Account: <br>• Policy Number:<br>• Specific Cause: (Courier Mishandling / Poor Quality)`,
                "Template": `CM complaining about Card Packing a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Material": {
                "Reason": `•Quality issue with physical Meeza card.`,
                "Requirements": `• CM ID:<br>• Description:<br>• Specific Cause: (Chip Fall Out / Plastic Break / Lamination Peel)`,
                "Template": `CM complaining about Card Material a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Card Activation Policy": {
                "Reason": `•Complaint about Meeza activation rules (e.g. ID needed).(FYI)`,
                "Requirements": `• CM ID:<br>• Policy Rule:<br>• Specific Cause: (Inconvenience / Proxy Refusal / Policy Dispute)`,
                "Template": `CM complaining about Card Activation Policy a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Alert Service": {
                "Reason": `•Issue with subscription to SMS alerts for Meeza.`,
                "Requirements": `• CM ID:<br>• Details:<br>• Specific Cause: (Service Stop / Fee Error / Content Issue)`,
                "Template": `CM complaining about Alert Service a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Wrong Embossing Name": {
                "Reason": `•Name printed on Meeza card differs from application.`,
                "Requirements": `• CM ID:<br>• Correct name:<br>• Specific Cause: (Typo / Spelling Error / Title Error)`,
                "Template": `CM complaining about Wrong Embossing Name a result of ( Specific Cause from Requirements )`,
                "Ticket": `No`,
                "Related_CC_&_Not": `Yes`
            },
            "Secured Code Complaint": {
                "Reason": `•Issue with OTP for local online payments.`,
                "Requirements": `• CM ID:<br>• Trans ID:<br>• Specific Cause: (OTP Not Rec'd / System Page Error / Auth Fail)`,
                "Template": `CM complaining about Secured Code Complaint a result of ( Specific Cause from Requirements )`,
                "Ticket": `Yes`,
                "Related_CC_&_Not": `Yes`
            },
            "Customer Inquiry": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Customer Request": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" },
            "Wrong Comp on other CM Profile": { "Reason": "Not related for call center", "Requirements": "Not related for call center", "Template": "Not related for call center", "Ticket": "No", "Related_CC_&_Not": "No" }
        }
    }
};