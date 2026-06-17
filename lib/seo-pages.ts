export type SeoArticle = {
  slug: string;
  journey?: "assist" | "probate";
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  searchIntent: string;
  updated: string;
  ctaButton?: string;
  ctaDestination?: string;
  ctaHeader?: string;
  ctaSubline: string;
  sections: {
    heading: string;
    body?: string[];
    bullets?: string[];
    subsections?: {
      heading: string;
      body?: string[];
      bullets?: string[];
    }[];
  }[];
  related: string[];
  sources: {
    label: string;
    href: string;
  }[];
};

export const seoArticles: SeoArticle[] = [
  {
    slug: "what-to-do-when-someone-dies",
    title: "What To Do When Someone Dies: A Step-by-Step UK Guide",
    metaTitle: "What To Do When Someone Dies: A Step-by-Step UK Guide",
    metaDescription:
      "Learn the practical steps to take after someone dies, including registering the death, locating the will, notifying organisations and understanding probate.",
    searchIntent: "what to do when someone dies",
    updated: "2026-05-30",
    ctaSubline: "Get a personalised step-by-step plan based on your situation.",
    intro: [
      "When someone dies, it can be difficult to know where to start.",
      "Many people suddenly find themselves responsible for paperwork, phone calls, official notifications and legal processes they have never encountered before.",
      "This guide explains the key steps to take after someone dies and helps you understand what needs your attention now, what can wait, and what you may need to do later.",
    ],
    sections: [
      {
        heading: "Step 1: Obtain the Medical Certificate",
        body: [
          "Before a death can be registered, a doctor or hospital will usually provide a Medical Certificate of Cause of Death. If the death is referred to a coroner, the registration process may be different and you should follow the instructions you are given.",
          "At this stage, focus on getting the official paperwork needed to register the death. Other estate administration tasks can usually wait until registration is underway.",
        ],
      },
      {
        heading: "Step 2: Register the Death",
        body: [
          "In most cases the death must be registered within five days in England and Wales. The registration appointment is usually with the local register office for the area where the person died.",
          "After registration, you can order official death certificate copies. Several organisations may ask to see one, so it can help to have more than one copy available.",
        ],
        subsections: [
          {
            heading: "Documents you may receive",
            bullets: [
              "Death Certificate",
              "Certificate for Burial or Cremation",
              "Tell Us Once reference, if the service is available",
            ],
          },
        ],
      },
      {
        heading: "Step 3: Use Tell Us Once",
        body: [
          "The Tell Us Once service allows you to notify multiple government departments in one process. The registrar will usually explain whether it is available and how to use it.",
          "Tell Us Once is helpful, but it does not contact banks, insurers, utilities, subscriptions or most private companies. You will normally need a separate notification list for those organisations.",
        ],
        subsections: [
          {
            heading: "Government organisations it may cover",
            bullets: [
              "HM Revenue & Customs",
              "Department for Work and Pensions",
              "DVLA",
              "Passport Office",
              "The local council",
            ],
          },
        ],
      },
      {
        heading: "Step 4: Locate the Will",
        body: [
          "If a will exists, it may identify the executors, beneficiaries and any funeral wishes. The original will is especially important, so keep it safe and avoid marking, stapling or changing it.",
          "If no will exists, different rules apply. In that situation, the person who deals with the estate may be determined by intestacy rules rather than by named executors.",
        ],
        subsections: [
          {
            heading: "What the will may tell you",
            bullets: ["Executors", "Beneficiaries", "Funeral wishes"],
          },
        ],
      },
      {
        heading: "Step 5: Identify Assets and Organisations",
        body: [
          "Start creating a simple list of the organisations connected to the person who died. You do not need to solve everything immediately; the first goal is to understand who may need to be contacted.",
          "Record account numbers, contact details, documents requested and next actions. This makes it easier to avoid duplicate calls and missed follow-ups.",
        ],
        bullets: [
          "Banks",
          "Building societies",
          "Pension providers",
          "Insurance companies",
          "Utility providers",
          "Mortgage providers",
          "Subscription services",
        ],
      },
      {
        heading: "Step 6: Determine Whether Probate Is Required",
        body: [
          "Not every estate requires probate. In practice, the answer often depends on what assets exist and what each bank, provider or asset holder requires before releasing money or closing accounts.",
          "Probate is more likely where there is property in the person's sole name, larger account balances, investments or organisations that ask for a grant. Joint ownership can also affect what is needed.",
        ],
        subsections: [
          {
            heading: "Factors that may affect whether probate is needed",
            bullets: [
              "Property ownership",
              "Bank account balances",
              "Asset ownership",
              "Joint ownership arrangements",
            ],
          },
        ],
      },
      {
        heading: "Don't Try To Do Everything At Once",
        body: [
          "One of the biggest mistakes people make is trying to understand the entire process immediately. That can make an already difficult time feel unmanageable.",
          "Focus on the next few actions first: register the death, use Tell Us Once if available, find the will, and begin a practical list of organisations and documents.",
        ],
      },
    ],
    related: [
      "who-needs-to-be-notified-when-someone-dies",
      "how-to-find-a-will-after-someone-dies",
      "executor-responsibilities-explained",
      "do-i-need-probate",
    ],
    sources: [
      {
        label: "GOV.UK: What to do after someone dies",
        href: "https://www.gov.uk/after-a-death",
      },
      {
        label: "GOV.UK: Tell Us Once",
        href: "https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once",
      },
    ],
  },
  {
    slug: "how-to-notify-a-bank-after-a-death",
    title: "How to Notify a Bank After a Death",
    metaTitle: "How to Notify a Bank After a Death",
    metaDescription:
      "Learn how to notify a bank after someone dies, what documents are needed and what happens next.",
    searchIntent: "notify bank after death",
    updated: "2026-05-30",
    ctaSubline:
      "We'll help you work out which organisations need to be contacted and what to do next.",
    intro: [
      "Telling someone's bank is one of the first practical tasks after a death. It's also one that raises a lot of questions: which banks to contact, what documents you'll need, whether accounts get frozen, and whether you need probate before anything can happen.",
      "This guide walks through what usually happens when you notify a bank, the information you're likely to need, and how to keep track of everything that follows.",
    ],
    sections: [
      {
        heading: "What Happens When You Notify a Bank?",
        body: [
          "The bank's bereavement team will record the death and explain what they need before they can close accounts, release funds, or transfer money.",
          "To protect the estate, the bank will often restrict activity on the account. This is routine, but it can affect direct debits, standing orders, and access to online banking, so it's worth knowing in advance.",
        ],
        subsections: [
          {
            heading: "What the bank typically does:",
            bullets: [
              "Records the death",
              "Stops unauthorised activity on the account",
              "Explains the next steps",
              "Requests supporting documents",
            ],
          },
        ],
      },
      {
        heading: "Documents Banks Often Request",
        body: [
          "Every bank runs its bereavement process slightly differently, but most ask for a similar set of documents and details. It helps to ask the bank to confirm its exact requirements in writing, so you're not caught out later.",
          "If you don't have probate yet, ask whether the bank can still share balance information or release funds to cover funeral costs — many will.",
        ],
        subsections: [
          {
            heading: "Commonly requested:",
            bullets: [
              "The death certificate",
              "Identification for the person handling the account",
              "The will (in some cases)",
              "Probate documents (in some cases)",
            ],
          },
        ],
      },
      {
        heading: "Do All Banks Require Probate?",
        body: [
          "No. Whether probate is needed depends on the account balance, the bank's own policies, and how the account was held.",
          "Some banks release smaller balances without probate; others ask for a grant first. Joint accounts are usually handled differently from accounts held in the person's sole name.",
        ],
        subsections: [
          {
            heading: "What can affect the bank's answer:",
            bullets: [
              "The account balance",
              "The bank's policies",
              "Whether the account is sole or joint",
              "Whether there are investments or linked products",
            ],
          },
        ],
      },
      {
        heading: "Other Organisations You'll Usually Need to Notify",
        body: [
          "A bank is only one part of the picture. Most estates involve several organisations, and each has its own process.",
          "Keep a single running list of who you've contacted, what they asked for, and what's still outstanding. This is especially helpful when family members are sharing the work and need to see what's been done.",
        ],
        subsections: [
          {
            heading: "Organisations to consider:",
            bullets: [
              "Pension providers",
              "Insurers",
              "Mortgage providers",
              "Utility companies",
              "Telecoms providers",
              "Subscription services",
            ],
          },
        ],
      },
    ],
    related: [
      "who-needs-to-be-notified-when-someone-dies",
      "what-to-do-when-someone-dies",
      "executor-responsibilities-explained",
      "do-i-need-probate",
    ],
    sources: [
      {
        label: "GOV.UK: What to do after someone dies",
        href: "https://www.gov.uk/after-a-death",
      },
    ],
  },
  {
    slug: "who-needs-to-be-notified-when-someone-dies",
    title: "Who Needs To Be Notified When Someone Dies?",
    metaTitle: "Who Needs To Be Notified When Someone Dies?",
    metaDescription:
      "A practical guide to the organisations that may need to be informed after someone dies.",
    searchIntent: "who needs to be notified when someone dies",
    updated: "2026-05-30",
    ctaSubline:
      "Generate a personalised notification checklist and track your progress in one place.",
    intro: [
      "Most people underestimate how many organisations may need to be informed after a death.",
      "This can quickly become overwhelming, especially when different organisations ask for different documents or use different bereavement processes.",
      "This guide gives you a practical starting point for building a notification checklist.",
    ],
    sections: [
      {
        heading: "Government Organisations",
        body: [
          "After registration, Tell Us Once may notify several government organisations for you. If Tell Us Once is not available, or if a department is not covered, you may need to contact organisations directly.",
        ],
        bullets: ["HMRC", "DWP", "DVLA", "Passport Office", "The local council"],
      },
      {
        heading: "Financial Organisations",
        body: [
          "Financial organisations usually need separate contact. Some will only need a death certificate and identification, while others may ask for probate before they can release assets.",
          "Ask each organisation what documents they need and whether there are balances, debts, direct debits or linked accounts to consider.",
        ],
        bullets: [
          "Banks",
          "Building societies",
          "Pension providers",
          "Investment providers",
          "Mortgage providers",
        ],
      },
      {
        heading: "Insurance Providers",
        body: [
          "Insurance policies may need to be claimed, cancelled, transferred or updated. Home and car insurance can be particularly important if property or vehicles still need to be protected.",
        ],
        bullets: ["Life insurance", "Home insurance", "Car insurance", "Travel insurance"],
      },
      {
        heading: "Utilities",
        body: [
          "Utilities and household services may need final meter readings, account transfers, payment changes or cancellation. If a property is empty, ask providers what they need to keep services safe and correctly billed.",
        ],
        bullets: ["Gas", "Electricity", "Water", "Broadband", "Mobile phone"],
      },
      {
        heading: "Digital Accounts",
        body: [
          "Digital accounts are easy to miss because there may be no paper trail. Review emails, bank statements and devices for subscriptions, cloud storage, social media, marketplaces and paid memberships.",
          "Some platforms have memorialisation or account closure processes. Others may only deal with an executor or close family member.",
        ],
        bullets: [
          "Email accounts",
          "Social media",
          "Online subscriptions",
          "Cloud storage",
          "Shopping and marketplace accounts",
        ],
      },
      {
        heading: "Create A Notification Checklist",
        body: [
          "Every estate is different. The organisations you need to contact will depend on the person's circumstances, assets, home, subscriptions and whether they were receiving benefits or pensions.",
          "A checklist helps turn a long, uncertain process into a set of manageable next actions. Include the organisation name, account details, date contacted, documents requested and follow-up date.",
        ],
      },
    ],
    related: [
      "how-to-notify-a-bank-after-a-death",
      "what-to-do-when-someone-dies",
      "how-to-find-a-will-after-someone-dies",
      "probate-checklist",
    ],
    sources: [
      {
        label: "GOV.UK: Tell Us Once",
        href: "https://www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once",
      },
    ],
  },
  {
    slug: "how-to-find-a-will-after-someone-dies",
    title: "How To Find A Will After Someone Dies",
    metaTitle: "How To Find A Will After Someone Dies",
    metaDescription:
      "Learn where to look for a will, who to contact and what to do if no will can be found.",
    searchIntent: "how to find a will after someone dies",
    updated: "2026-05-30",
    ctaSubline:
      "Answer a few questions and we'll help you understand what needs to happen next.",
    intro: [
      "One of the first questions after someone dies is whether a will exists.",
      "Finding the latest valid will can significantly simplify estate administration because it may identify who should deal with the estate and who should inherit.",
      "This guide explains where to look, who to ask, and what it can mean if no will can be found.",
    ],
    sections: [
      {
        heading: "Start At Home",
        body: [
          "Begin with the places where important documents were usually kept. Look for an original signed will, solicitor letters, storage receipts or notes that mention where documents are held.",
          "Keep any original documents safe. Avoid removing staples, adding notes or changing the condition of a will, as this can create questions later.",
        ],
        bullets: [
          "Filing cabinets",
          "Safes",
          "Document folders",
          "Solicitor correspondence",
          "Bank or storage paperwork",
        ],
      },
      {
        heading: "Contact Their Solicitor",
        body: [
          "Many wills are stored by solicitors. If you know which solicitor the person used, contact the firm and ask whether they hold a will or any related estate planning documents.",
          "If the solicitor has merged, closed or changed name, the local law society or successor firm may be able to help you work out where files were transferred.",
        ],
      },
      {
        heading: "Check With Family Members",
        body: [
          "Relatives or close friends may know where documents are stored, which solicitor was used, or whether the person ever discussed making a will.",
          "Try to keep the conversation practical and record what you are told. If several people are searching, agree who will contact each organisation so work is not duplicated.",
        ],
        bullets: [
          "Where documents are stored",
          "Which solicitor was used",
          "Whether a will exists",
          "Whether there may be a newer version",
        ],
      },
      {
        heading: "What If No Will Can Be Found?",
        body: [
          "If no will can be found, the estate may be administered under intestacy rules. This can affect who is entitled to deal with the estate and who may inherit.",
          "If there is uncertainty, disagreement, or a possibility that a will exists but cannot be located, it may be sensible to get professional advice before taking major estate decisions.",
        ],
      },
      {
        heading: "Why Finding The Will Matters",
        body: [
          "The will may identify executors, beneficiaries and funeral wishes. It can also help banks, probate services and other organisations understand who has authority to act.",
          "If you find more than one will, do not assume the newest document is valid without checking the details. Keep everything safe and note where each version was found.",
        ],
        bullets: ["Executors", "Beneficiaries", "Funeral wishes"],
      },
    ],
    related: [
      "executor-responsibilities-explained",
      "what-to-do-when-someone-dies",
      "who-needs-to-be-notified-when-someone-dies",
      "do-i-need-probate",
    ],
    sources: [
      {
        label: "GOV.UK: Wills, probate and inheritance",
        href: "https://www.gov.uk/wills-probate-inheritance",
      },
    ],
  },
  {
    slug: "executor-responsibilities-explained",
    title: "Executor Responsibilities Explained In Plain English",
    metaTitle: "Executor Responsibilities Explained In Plain English",
    metaDescription:
      "Understand the role of an executor, common responsibilities and the practical steps involved in administering an estate.",
    searchIntent: "executor responsibilities explained",
    updated: "2026-05-30",
    ctaHeader: "Thinking about probate as an executor?",
    ctaSubline: "Get a personalised executor checklist based on your situation.",
    ctaButton: "Learn About Harbour Probate",
    ctaDestination: "/interest/probate",
    intro: [
      "Being named as an executor can feel intimidating.",
      "Many executors have never administered an estate before and are suddenly expected to understand paperwork, organisations, probate and beneficiary questions.",
      "This guide explains the executor role in practical terms, without replacing legal advice for complex or disputed estates.",
    ],
    sections: [
      {
        heading: "What Does An Executor Do?",
        body: [
          "Executors are responsible for helping administer the estate. The exact work depends on the will, the assets, whether probate is needed, and whether there are any disputes or unusual circumstances.",
          "In simple terms, executors organise information, protect estate assets, deal with organisations and work towards distributing the estate correctly.",
        ],
        bullets: [
          "Locating the will",
          "Identifying assets",
          "Notifying organisations",
          "Paying debts",
          "Distributing assets",
        ],
      },
      {
        heading: "What Are Executors Personally Responsible For?",
        body: [
          "Executors should act honestly, keep clear records, follow the law and protect estate assets. They should avoid rushing into distributions before debts, tax questions and beneficiary details are understood.",
          "If the estate is complex, disputed, insolvent or includes overseas assets, professional advice may be appropriate.",
        ],
        bullets: [
          "Acting honestly",
          "Keeping records",
          "Following the law",
          "Protecting estate assets",
        ],
      },
      {
        heading: "Do Executors Always Need Probate?",
        body: [
          "No. Some estates can be administered without probate. The practical answer usually depends on the assets involved and what banks or other organisations require.",
          "Executors should ask each asset holder what documents they need before assuming that probate is or is not required.",
        ],
      },
      {
        heading: "What If There Are Multiple Executors?",
        body: [
          "Executors can often work together and divide responsibilities. For example, one person might handle bank contact while another gathers documents or keeps the task list updated.",
          "Important decisions should be communicated clearly. Keeping written records helps reduce confusion and protects everyone involved.",
        ],
      },
      {
        heading: "A Practical Executor Checklist",
        body: [
          "Early executor work is usually about understanding the estate, not completing everything at once. Start with the tasks that give you a clearer picture of what is required.",
        ],
        bullets: [
          "Register the death",
          "Locate the will",
          "Create an asset list",
          "Notify organisations",
          "Assess probate requirements",
          "Keep records of decisions and correspondence",
        ],
      },
    ],
    related: [
      "how-to-find-a-will-after-someone-dies",
      "what-to-do-when-someone-dies",
      "how-to-notify-a-bank-after-a-death",
      "probate-checklist",
    ],
    sources: [
      {
        label: "GOV.UK: Applying for probate",
        href: "https://www.gov.uk/wills-probate-inheritance",
      },
    ],
  },
];

const probateSources = [
  {
    label: "GOV.UK: Applying for probate",
    href: "https://www.gov.uk/wills-probate-inheritance",
  },
  {
    label: "GOV.UK: Probate fees",
    href: "https://www.gov.uk/applying-for-probate/fees",
  },
];

export const probateArticles: SeoArticle[] = [
  {
    slug: "do-i-need-probate",
    journey: "probate",
    title: "Do I Need Probate?",
    metaTitle: "Do I Need Probate? A Simple UK Probate Checker",
    metaDescription:
      "Find out whether probate may be required and understand the factors that affect probate in England and Wales.",
    searchIntent: "do I need probate",
    updated: "2026-05-30",
    ctaHeader: "Not sure whether probate applies to your situation?",
    ctaSubline:
      "Answer a few questions and Harbour will assess whether probate is likely to be required and explain why.",
    ctaButton: "Guide Me Through This",
    ctaDestination: "/probate-check",
    intro: [
      "One of the most common questions after someone dies is whether probate is actually required.",
      "The answer depends on the assets involved, how they were owned and the requirements of the organisations holding them.",
      "Many estates require probate, but many do not. This guide explains the key factors that determine whether probate may be needed.",
    ],
    sections: [
      {
        heading: "What Is Probate?",
        body: [
          "Probate is the legal authority to deal with someone's estate after they die. In England and Wales, it usually means applying for a grant of probate if there is a will, or letters of administration if there is no will.",
          "In practical terms, probate proves who is allowed to collect estate assets, deal with organisations and distribute what is left to the right people. Harbour can help you understand the process, but it does not provide legal advice.",
        ],
      },
      {
        heading: "When Probate Is Usually Required",
        body: [
          "Probate is often needed when organisations will not release assets without formal authority. This is common where assets are held in the person's sole name or where the estate is larger or more complex.",
        ],
        bullets: [
          "Property owned solely by the person who died",
          "Significant sole bank or building society accounts",
          "Investments, shares or managed funds",
          "Larger estates with several asset holders",
          "Institutions that specifically ask for a grant",
        ],
      },
      {
        heading: "When Probate May Not Be Required",
        body: [
          "Probate may not be needed if assets pass automatically to a surviving joint owner, or if the estate is small enough for organisations to use their own simplified bereavement process.",
          "Each organisation sets its own rules. One bank may release funds without probate while another may ask for a grant, even in similar circumstances.",
        ],
        bullets: [
          "Jointly owned bank accounts or assets",
          "Property owned as joint tenants",
          "Small estates with low account balances",
          "Organisations with simplified small-estate processes",
        ],
      },
      {
        heading: "Does Having A Will Mean Probate Is Required?",
        body: [
          "No. The existence of a will does not automatically mean probate is required.",
          "A will says who should administer the estate and who should inherit. Probate is a separate question about whether organisations need formal proof before they will release or transfer assets.",
        ],
      },
      {
        heading: "How Do I Know For Certain?",
        body: [
          "The only practical way to know is to understand what assets exist and ask the organisations holding them what they require.",
          "Start by listing property, bank accounts, savings, pensions, investments and debts. Then contact each relevant organisation and record whether they need a death certificate, identification, a will or probate documents.",
        ],
      },
      {
        heading: "Common Probate Scenarios",
        subsections: [
          {
            heading: "A solely owned home",
            body: [
              "Probate is usually likely if the person owned a property in their sole name, because the legal authority to sell or transfer it may be needed.",
            ],
          },
          {
            heading: "A joint bank account only",
            body: [
              "Probate may not be required if the main assets pass automatically to a surviving joint account holder and there are no significant sole assets.",
            ],
          },
          {
            heading: "Several sole accounts and investments",
            body: [
              "Probate is more likely where there are multiple asset holders, investments or higher balances in the person's sole name.",
            ],
          },
          {
            heading: "A small estate with no property",
            body: [
              "Probate may not be required if organisations are willing to use their small-estate processes, but you still need to ask each provider.",
            ],
          },
        ],
      },
    ],
    related: [
      "probate-checklist",
      "can-i-do-probate-without-a-solicitor",
      "how-long-does-probate-take",
      "executor-responsibilities-explained",
    ],
    sources: probateSources,
  },
  {
    slug: "can-i-do-probate-without-a-solicitor",
    journey: "probate",
    title: "Can I Do Probate Without A Solicitor?",
    metaTitle: "Can I Do Probate Without A Solicitor?",
    metaDescription:
      "Understand when DIY probate may be possible and when professional support may be worth considering.",
    searchIntent: "can I do probate without a solicitor",
    updated: "2026-05-30",
    ctaHeader: "Thinking about handling probate yourself?",
    ctaSubline:
      "See how Harbour Probate helps executors stay organised, understand the process and manage probate with confidence.",
    ctaButton: "Learn About Harbour Probate",
    ctaDestination: "/interest/probate",
    intro: [
      "Many executors assume they must hire a solicitor to handle probate.",
      "In reality, many straightforward estates are administered without professional legal representation.",
      "This guide explains when DIY probate may be suitable, where the risks are, and how guided support can help without replacing legal advice.",
    ],
    sections: [
      {
        heading: "When DIY Probate May Be Suitable",
        body: [
          "DIY probate may be realistic when the estate is straightforward, the executors agree, the will is clear and the assets are based in England and Wales.",
          "It is usually easier when there are no disputes, no unusual trusts, no overseas assets and no complex inheritance tax questions.",
        ],
        bullets: [
          "A valid will is available",
          "Executors agree on the process",
          "Assets are easy to identify",
          "There are no known disputes",
          "The estate is not unusually complex",
        ],
      },
      {
        heading: "When Professional Advice May Be Helpful",
        body: [
          "Professional advice may be worth considering if there are disputes, missing beneficiaries, overseas assets, business interests, trusts, inheritance tax complexity or uncertainty about the will.",
          "You may not need a solicitor for every task, but it can be sensible to get advice before making decisions that could affect the estate or beneficiaries.",
        ],
      },
      {
        heading: "Advantages Of DIY Probate",
        body: [
          "The main advantage is control. You can understand the estate directly, keep your own records and avoid paying for full estate administration when the work is mostly administrative.",
          "DIY probate can also reduce costs, especially where solicitor fees would be disproportionate to the size or simplicity of the estate.",
        ],
      },
      {
        heading: "Risks To Be Aware Of",
        body: [
          "Executors are responsible for acting carefully, keeping records and making sure debts, tax questions and beneficiaries are handled properly.",
          "The biggest risks are usually incomplete information, distributing assets too early, misunderstanding ownership, missing debts or trying to handle a complex estate without support.",
        ],
      },
      {
        heading: "How Harbour Probate Can Help",
        body: [
          "Harbour Probate is guided support, not legal representation. It helps executors organise documents, track organisations, understand the practical steps and keep the probate process moving.",
          "If your situation becomes more complex, Harbour can help you identify what information to gather before you seek professional advice.",
        ],
      },
    ],
    related: [
      "do-i-need-probate",
      "probate-checklist",
      "how-much-does-probate-cost",
      "how-long-does-probate-take",
    ],
    sources: probateSources,
  },
  {
    slug: "how-much-does-probate-cost",
    journey: "probate",
    title: "How Much Does Probate Cost?",
    metaTitle: "How Much Does Probate Cost In The UK?",
    metaDescription:
      "Learn about common probate costs, solicitor fees and what factors affect the overall cost of administering an estate.",
    searchIntent: "how much does probate cost",
    updated: "2026-05-30",
    ctaHeader: "Worried about probate costs?",
    ctaSubline:
      "See how Harbour Probate can help you stay organised and understand the process before paying for professional services.",
    ctaButton: "Learn About Harbour Probate",
    ctaDestination: "/interest/probate",
    intro: [
      "The cost of probate can vary significantly depending on the complexity of the estate and the support you choose.",
      "Some estates only involve the court application fee and a small amount of administration. Others need professional help, valuations, tax support or legal advice.",
      "This guide explains the common cost categories so you can understand what may affect the overall amount.",
    ],
    sections: [
      {
        heading: "Probate Application Fees",
        body: [
          "In England and Wales, there is a court fee for probate applications above the official estate-value threshold. Extra copies of the grant can also be ordered for a fee.",
          "Fees can change, so always check the current GOV.UK fee page before applying.",
        ],
      },
      {
        heading: "Solicitor Fees",
        body: [
          "Solicitor fees vary widely. Some firms charge fixed fees for defined work, while others charge hourly rates or a percentage of the estate value.",
          "Full estate administration usually costs more than getting help with a specific question or document review.",
        ],
      },
      {
        heading: "Fixed Fee vs Percentage-Based Pricing",
        body: [
          "Fixed-fee pricing can make costs easier to understand, but you need to check exactly what is included and what would cost extra.",
          "Percentage-based pricing can become expensive for larger estates, even where the estate is straightforward. Executors should understand the pricing basis before agreeing to support.",
        ],
      },
      {
        heading: "Other Costs To Consider",
        bullets: [
          "Death certificate copies",
          "Property valuations",
          "Estate agent or conveyancing costs",
          "Inheritance tax or accountancy support",
          "Tracing beneficiaries",
          "Postage, document copies and administrative costs",
        ],
      },
      {
        heading: "Why Costs Vary Between Estates",
        body: [
          "Costs vary because estates vary. A simple estate with a clear will, one property and cooperative beneficiaries is very different from an estate with disputes, overseas assets, business interests or complex tax questions.",
          "The amount of organisation already in place also matters. Missing paperwork and unclear asset lists can increase the time needed.",
        ],
      },
      {
        heading: "Reducing Probate Costs",
        body: [
          "The best way to reduce avoidable costs is to get organised early. List assets, debts and organisations, keep records of contact, find the will and understand whether probate is actually required.",
          "Harbour Probate is guided support, not legal representation. It can help you manage the practical side before deciding whether you need professional services.",
        ],
      },
    ],
    related: [
      "can-i-do-probate-without-a-solicitor",
      "probate-checklist",
      "do-i-need-probate",
      "how-long-does-probate-take",
    ],
    sources: probateSources,
  },
  {
    slug: "probate-checklist",
    journey: "probate",
    title: "Probate Checklist",
    metaTitle: "Probate Checklist: Everything You'll Need",
    metaDescription:
      "A practical probate checklist covering the documents, information and actions commonly required during probate.",
    searchIntent: "probate checklist",
    updated: "2026-05-30",
    ctaHeader: "Not sure where to start?",
    ctaSubline:
      "See how Harbour Probate helps you organise documents, track progress and manage probate step-by-step.",
    ctaButton: "Learn About Harbour Probate",
    ctaDestination: "/interest/probate",
    intro: [
      "Probate involves gathering information, locating documents and completing a number of administrative tasks.",
      "Having a clear checklist can make the process feel far more manageable.",
      "This guide covers the documents, information and actions executors commonly need to organise before and during probate.",
    ],
    sections: [
      {
        heading: "Documents You'll Typically Need",
        bullets: [
          "Original will and any codicils, if there is a will",
          "Death certificate or coroner's interim certificate",
          "Identification for executors or administrators",
          "Bank, savings and investment statements",
          "Property and mortgage information",
          "Pension and insurance documents",
        ],
      },
      {
        heading: "Information You'll Need To Gather",
        body: [
          "You will usually need enough information to estimate the value of the estate. That includes assets, debts, gifts, property and any jointly owned items.",
          "Keep notes of how figures were calculated and where information came from. Clear records make later questions easier to answer.",
        ],
      },
      {
        heading: "Organisations You'll Need To Contact",
        bullets: [
          "Banks and building societies",
          "Mortgage providers",
          "Pension providers",
          "Investment platforms",
          "Insurance companies",
          "Utility and household providers",
          "HMRC and other government bodies where relevant",
        ],
      },
      {
        heading: "Preparing For Probate",
        body: [
          "Before applying, confirm who is entitled to apply, find the original will if there is one, estimate estate values and check whether inheritance tax reporting is needed.",
          "It can help to ask each organisation whether they require probate before you begin the application.",
        ],
      },
      {
        heading: "Common Mistakes To Avoid",
        bullets: [
          "Assuming probate is always required",
          "Assuming probate is never required because there is a will",
          "Sending original documents without checking requirements",
          "Distributing assets before debts and tax questions are understood",
          "Failing to keep records of calls, letters and decisions",
        ],
      },
      {
        heading: "Keeping Track Of Progress",
        body: [
          "A good probate checklist should show what has been done, what is waiting for a response and what needs a follow-up.",
          "Harbour Probate helps executors organise documents, track progress and keep practical next steps in one place.",
        ],
      },
    ],
    related: [
      "do-i-need-probate",
      "can-i-do-probate-without-a-solicitor",
      "how-much-does-probate-cost",
      "how-long-does-probate-take",
    ],
    sources: probateSources,
  },
  {
    slug: "how-long-does-probate-take",
    journey: "probate",
    title: "How Long Does Probate Take?",
    metaTitle: "How Long Does Probate Take?",
    metaDescription:
      "Understand the factors that affect probate timelines and why some estates take longer than others.",
    searchIntent: "how long does probate take",
    updated: "2026-05-30",
    ctaHeader: "Wondering what happens next?",
    ctaSubline:
      "See how Harbour Probate helps executors stay organised and manage each stage of the probate process.",
    ctaButton: "Learn About Harbour Probate",
    ctaDestination: "/interest/probate",
    intro: [
      "One of the most common questions executors ask is how long probate will take.",
      "Unfortunately there is no single answer because every estate is different.",
      "This guide explains the stages that affect probate timing and the avoidable delays executors can often reduce.",
    ],
    sections: [
      {
        heading: "Typical Probate Timelines",
        body: [
          "Probate timing depends on the estate, the quality of the paperwork, inheritance tax questions and how quickly organisations respond.",
          "The application itself is only one part of the timeline. Gathering information before applying can take just as long, especially where documents or values are missing.",
        ],
      },
      {
        heading: "Factors That Affect Probate Duration",
        bullets: [
          "How quickly the will is found",
          "Whether executors agree",
          "How many organisations hold assets",
          "Whether property valuations are needed",
          "Whether inheritance tax reporting is required",
          "Whether there are disputes or missing beneficiaries",
        ],
      },
      {
        heading: "Delays That Commonly Occur",
        body: [
          "Common delays include missing original wills, unclear estate values, inconsistent names, incomplete forms, inheritance tax questions and slow responses from banks or pension providers.",
          "Executor disagreements, disputes or overseas assets can also add significant time.",
        ],
      },
      {
        heading: "What Happens After Probate Is Granted",
        body: [
          "After probate is granted, executors can usually send copies of the grant to organisations that requested it. Those organisations can then release or transfer assets according to their processes.",
          "The estate still needs to be administered after the grant. That may include paying debts, finalising tax, selling property and distributing assets to beneficiaries.",
        ],
      },
      {
        heading: "How To Keep Probate Moving",
        body: [
          "The most useful step is organisation. Keep a document list, track each organisation, record what has been requested and follow up when responses are overdue.",
          "Harbour Probate helps executors keep those tasks together so the process is easier to understand and manage.",
        ],
      },
    ],
    related: [
      "probate-checklist",
      "do-i-need-probate",
      "how-much-does-probate-cost",
      "can-i-do-probate-without-a-solicitor",
    ],
    sources: probateSources,
  },
];

seoArticles.push(...probateArticles);

export const oldGuideRedirects: Record<string, string> = {
  "what-to-do-when-someone-dies-checklist": "what-to-do-when-someone-dies",
  "who-do-you-need-to-notify-when-someone-dies":
    "who-needs-to-be-notified-when-someone-dies",
  "what-is-tell-us-once": "what-to-do-when-someone-dies",
  "how-to-organise-paperwork-after-a-death":
    "who-needs-to-be-notified-when-someone-dies",
  "do-i-need-probate-or-not": "do-i-need-probate",
  "do-i-need-probate-if-there-is-a-will": "do-i-need-probate",
  "can-i-apply-for-probate-without-a-solicitor":
    "can-i-do-probate-without-a-solicitor",
  "how-long-does-probate-take-uk": "how-long-does-probate-take",
  "how-much-does-probate-cost-uk": "how-much-does-probate-cost",
  "what-documents-do-i-need-for-probate": "probate-checklist",
};

export function getSeoArticle(slug: string) {
  return seoArticles.find((article) => article.slug === slug);
}

export function getArticleJourney(article: SeoArticle) {
  return article.journey ?? "assist";
}
