import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  AlertCircle,
  Building2,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Notice of Privacy Practices | Texas Cardiology Associates of Houston",
  description:
    "Notice of Privacy Practices for Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston. Learn how medical information about you is used, protected, and disclosed.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Top Back Link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <span className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-blue-400/20">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>HIPAA Notice of Privacy Practices</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Notice of Privacy Practices
            </h1>

            <p className="text-blue-200 text-sm sm:text-base font-medium max-w-3xl">
              Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                Effective Date: <strong>01/01/2023</strong>
              </span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                Applies to: <strong>All Clinicians, Employees &amp; Practice Locations</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Urgent Note / Summary Box */}
        <div className="bg-blue-50 border border-blue-200/90 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-extrabold text-blue-950">
                Important Notice Regarding Your Medical Information
              </h2>
              <p className="text-blue-900/90 text-sm leading-relaxed font-semibold">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This Notice of Privacy Practices (the &ldquo;Notice&rdquo;) tells you about the ways we may use and disclose your protected health information (&ldquo;medical information&rdquo;) and your rights and our obligations regarding the use and disclosure of your medical information. This Notice applies to Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston, including its clinicians and employees (the &ldquo;Practice&rdquo;).
              </p>
            </div>
          </div>
        </div>

        {/* Section I: Our Obligations */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              I
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Our Obligations
            </h2>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            We are required by law to:
          </p>

          <ul className="space-y-3 text-slate-700 text-sm">
            {[
              "Maintain the privacy of your medical information, to the extent required by state and federal law;",
              "Give you this Notice explaining our legal duties and privacy practices with respect to medical information about you;",
              "Notify affected individuals following a breach of unsecured medical information under federal law;",
              "Follow the terms of the version of this Notice that is currently in effect; and",
              "Not engage in any actions that could constitute “information blocking” under the 21st Century Cures Act and the regulations promulgated thereunder.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section II: How We May Use and Disclose Medical Information About You */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              II
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              How We May Use and Disclose Medical Information About You
            </h2>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            The following categories describe the different reasons that we typically use and disclose medical information. These categories are intended to be general descriptions only, and not a list of every instance in which we may use or disclose your medical information. Please understand that for these categories, the law generally does not require us to get your authorization in order for us to use or disclose your medical information.
          </p>

          <div className="grid grid-cols-1 gap-5">
            {[
              {
                letter: "A",
                title: "For Treatment",
                text: "We may use and disclose medical information about you to provide you with health care treatment and related services, including coordinating and managing your health care. We may disclose medical information about you to physicians, nurses, other clinicians, and personnel who are providing or involved in providing health care to you (both within and outside of the Practice). For example, should your care require referral to or treatment by another physician of a specialty outside of the Practice, we may provide that physician with your medical information in order to aid the physician in his or her treatment of you.",
              },
              {
                letter: "B",
                title: "For Payment",
                text: "We may use and disclose medical information about you so that we or may bill and collect from you, an insurance company, or a third party for the health care services we provide. This may also include the disclosure of medical information to obtain prior authorization for treatment and procedures from your insurance plan. For example, we may send a claim for payment to your insurance company, and that claim may have a code on it that describes the services that have been rendered to you. If, however, you pay for an item or service in full, out of pocket, and request that we not disclose to your health plan the medical information solely relating to that item or service, as described more fully in Section IV of this Notice, we will follow that restriction on disclosure unless otherwise required by law.",
              },
              {
                letter: "C",
                title: "For Health Care Operations",
                text: "We may use and disclose medical information about you for our health care operations. These uses and disclosures are necessary to operate and manage our practice and to promote quality care. For example, we may need to use or disclose your medical information in order to assess the quality of care you receive or to conduct certain cost management, business management, administrative, or quality improvement activities or to provide information to our insurance carriers.",
              },
              {
                letter: "D",
                title: "Quality Assurance",
                text: "We may need to use or disclose your medical information for our internal processes to assess and facilitate the provision of quality care to our patients.",
              },
              {
                letter: "E",
                title: "Utilization Review",
                text: "We may need to use or disclose your medical information to perform a review of the services we provide in order to evaluate whether that the appropriate level of services is received, depending on condition and diagnosis.",
              },
              {
                letter: "F",
                title: "Credentialing and Peer Review",
                text: "We may need to use or disclose your medical information in order for us to review the credentials, qualifications and actions of our clinicians.",
              },
              {
                letter: "G",
                title: "Treatment Alternatives",
                text: "We may use and disclose medical information to tell you about or recommend possible treatment options or alternatives that we believe may be of interest to you.",
              },
              {
                letter: "H",
                title: "Appointment Reminders and Health Related Benefits and Services",
                text: "We may use and disclose medical information, in order to contact you (including, for example, contacting you by phone and leaving a message on an answering machine) to provide appointment reminders and other information. We may use and disclose medical information to tell you about health-related benefits or services that we believe may be of interest to you. We may use and disclose medical information via our online portal, email, text messages, or by phone.",
              },
              {
                letter: "I",
                title: "Business Associates",
                text: "There are some services (such as billing or legal services) that may be provided to or on behalf of our Practice through contracts with business associates. When these services are contracted, we may disclose your medical information to our business associate so that they can perform the job we have asked them to do. To protect your medical information, however, we require the business associate to appropriately safeguard your information.",
              },
              {
                letter: "J",
                title: "Individuals Involved in Your Care or Payment for Your Care",
                text: "We may disclose medical information about you to a friend or family member who is involved in your health care, as well as to someone who helps pay for your care, but we will do so only as allowed by state or federal law (with an opportunity for you to agree or object when required under the law), or in accordance with your prior authorization.",
              },
              {
                letter: "K",
                title: "As Required by Law",
                text: "We will disclose medical information about you when required to do so by federal, state, or local law or regulations, including disclosures that may be required under the 21st Century Cures Act.",
              },
              {
                letter: "L",
                title: "To Avert an Imminent Threat of Injury to Health or Safety",
                text: "We may use and disclose medical information about you when necessary to prevent or decrease a serious and imminent threat of injury to your physical, mental or emotional health or safety or the physical safety of another person. Such disclosure would only be to medical or law enforcement personnel.",
              },
              {
                letter: "M",
                title: "Organ and Tissue Donation",
                text: "If you are an organ donor, we may use and disclose medical information to organizations that handle organ procurement or organ, eye or tissue transplantation or to an organ donation bank as necessary to facilitate organ or tissue donation and transplantation.",
              },
              {
                letter: "N",
                title: "Research",
                text: "We may use or disclose your medical information for research purposes in certain situations. Texas law permits us to disclose your medical information without your written authorization to qualified personnel for research, but the personnel may not directly or indirectly identify a patient in any report of the research or otherwise disclose identity in any manner. Additionally, a special approval process will be used for research purposes, when required by state or federal law. For example, we may use or disclose your information to an Institutional Review Board or other authorized privacy board to obtain a waiver of authorization under HIPAA. Additionally, we may use or disclose your medical information for research purposes if your authorization has been obtained when required by law, or if the information we provide to researchers is “de-identified.”",
              },
              {
                letter: "O",
                title: "Military and Veterans",
                text: "If you are a member of the armed forces, we may use and disclose medical information about you as required by the appropriate military authorities.",
              },
              {
                letter: "P",
                title: "Workers’ Compensation",
                text: "We may disclose medical information about you for your worker’ compensation or similar program. These programs provide benefits for work-related injuries. For example, if you have injuries that resulted from your employment, workers’ compensation insurance or a state workers’ compensation program may be responsible for payment for your care, in which case we might be required to provide information to the insurer or program.",
              },
              {
                letter: "Q",
                title: "Public Health Risks",
                text: "We may disclose medical information about you to public health authorities for public health activities. As a general rule, we are required by law to disclose certain types of information to public health authorities, such as the Texas Department of State Health Services. The types of information generally include: preventing or controlling disease, injury, or disability; reporting births and deaths; reporting suspected child abuse or neglect; reporting reactions to medications or problems with medical devices; notifying people of recalls; notifying a person exposed to a disease; notifying appropriate government authority if we believe a patient has been the victim of abuse, neglect, or domestic violence; and assisting in public health investigations.",
              },
              {
                letter: "R",
                title: "Health Oversight Activities",
                text: "We may disclose medical information to a health oversight agency for activities authorized by law. These oversight activities include audits, civil, administrative, or criminal investigations and proceedings, inspections, licensure and disciplinary actions, and other activities necessary for the government to monitor the health care system, certain governmental benefit programs, certain entities subject to government regulations which relate to health information, and compliance with civil rights laws.",
              },
              {
                letter: "S",
                title: "Legal Matters",
                text: "If you are involved in a lawsuit or a legal dispute, we may disclose medical information about you in response to a court or administrative order, subpoena, discovery request, or other lawful process. In addition to lawsuits, there may be other legal proceedings for which we may be required or authorized to use or disclose your medical information, such as investigations of clinicians, competency hearings on individuals, or claims over the payment of fees for medical services.",
              },
              {
                letter: "T",
                title: "Law Enforcement, National Security and Intelligence Activities",
                text: "In certain circumstances, we may disclose your medical information if we are asked to do so by law enforcement officials, or if we are required by law to do so. We may disclose your medical information to law enforcement personnel, if necessary to prevent or decrease a serious and imminent threat of injury to your physical, mental, or emotional health or safety or the physical safety of another person. We may disclose medical information about you to authorized federal officials for intelligence, counterintelligence, and other national security activities authorized by law.",
              },
              {
                letter: "U",
                title: "Coroners, Medical Examiners and Funeral Home Directors",
                text: "We may disclose your medical information to a coroner or medical examiner. This may be necessary, for example, to identify a deceased person or determine the cause of death. We may also release medical information about our patients to funeral home directors as necessary to carry out their duties.",
              },
              {
                letter: "V",
                title: "Inmates",
                text: "If you are an inmate of a correctional institution or under custody of a law enforcement official, we may disclose medical information about you to the health care personnel of a correctional institution as necessary for the institution to provide you with health care treatment.",
              },
              {
                letter: "W",
                title: "Marketing of Related Health Services",
                text: "We may use or disclose your medical information to send you treatment or healthcare operations communications concerning treatment alternatives or other health-related products or services. We may provide such communications to you in instances where we receive financial remuneration from a third party in exchange for making the communication only with your specific authorization unless the communication: (i) is made face-to-face by the Practice to you, (ii) consists of a promotional gift of nominal value provided by the Practice, or (iii) is otherwise permitted by law. If the marketing communication involves financial remuneration and an authorization is required, the authorization must state that such remuneration is involved. Additionally, if we use or disclose information to send a written marketing communication (as defined by Texas law) through the mail, the communication must be sent in an envelope showing only the name and addresses of sender and recipient and must state the name and toll-free number of the entity and explain the right to opt out.",
              },
              {
                letter: "X",
                title: "Fundraising",
                text: "We may use or disclose certain limited amounts of your medical information to send you fundraising materials. You have a right to opt out of receiving such fundraising communications. Any such fundraising materials sent to you will have clear and conspicuous instructions on how you may opt out of receiving such communications in the future.",
              },
              {
                letter: "Y",
                title: "Electronic Disclosures of Medical Information",
                text: "Under Texas law, we are required to provide notice to you if your medical information is subject to electronic disclosure. This Notice serves as general notice that we may disclose your medical information electronically for treatment, payment, or health care operations or as otherwise authorized or required by state or federal law.",
              },
            ].map((item) => (
              <div
                key={item.letter}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-blue-700 text-sm sm:text-base">
                    {item.letter}.
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section III: Other Uses of Medical Information */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              III
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Other Uses of Medical Information
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                A. Authorizations
              </h3>
              <p className="text-slate-600">
                There are times we may need or want to use or disclose your medical information for reasons other than those listed above, but to do so we will need your prior authorization. Other than expressly provided herein, any other uses or disclosures of your medical information will require your specific written authorization.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                B. Psychotherapy Notes, Marketing and Sale of Medical Information
              </h3>
              <p className="text-slate-600">
                Most uses and disclosures of “psychotherapy notes,” uses and disclosures of medical information for marketing purposes, and disclosures that constitute a “sale of medical information” under HIPAA require your authorization.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                C. Right to Revoke Authorization
              </h3>
              <p className="text-slate-600">
                If you provide us with written authorization to use or disclose your medical information for such other purposes, you may revoke that authorization in writing at any time. If you revoke your authorization, we will no longer use or disclose your medical information for the reasons covered by your written authorization. You understand that we are unable to take back any uses or disclosures we have already made in reliance upon your authorization, and that we are required to retain our records of the care that we provided to you.
              </p>
            </div>
          </div>
        </div>

        {/* Section IV: Your Rights Regarding Medical Information About You */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              IV
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Your Rights Regarding Medical Information About You
            </h2>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            Federal and state laws provide you with certain rights regarding the medical information we have about you. The following is a summary of those rights.
          </p>

          <div className="space-y-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                A. Right to Inspect and Copy
              </h3>
              <p className="text-slate-600">
                Under most circumstances, you have the right to inspect and/or copy your medical information that we have in our possession, which generally includes your medical and billing records. To inspect or copy your medical information, you must submit your request to do so in writing to the Practice’s HIPAA Officer at the address listed in Section VI below.
              </p>
              <p className="text-slate-600">
                If you request a copy of your information, we may charge a fee for the costs of copying, mailing, or certain supplies associated with your request. The fee we may charge will be the amount allowed by state law. If your requested medical information is maintained in an electronic format and you request an electronic copy, we will provide you with the requested medical information in the electronic form and format requested, if readily producible.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                B. Right to Amend
              </h3>
              <p className="text-slate-600">
                If you feel the medical information we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept by the Practice. To request an amendment, your request must be in writing and submitted to the HIPAA Officer at the address listed in Section VI below with supporting reasons.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                C. Right to an Accounting of Disclosures
              </h3>
              <p className="text-slate-600">
                You have the right to request an “accounting of disclosures” of your medical information for up to six years prior to the date of your request, excluding disclosures for Treatment, Payment, or Health Care Operations, or disclosures made pursuant to your specific authorization.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                D. Right to Request Restrictions
              </h3>
              <p className="text-slate-600">
                You have the right to request a restriction or limitation on the medical information we use or disclose about you for treatment, payment, or health care operations. In addition, if you pay for an item or service in full, out of pocket, and request that we not disclose to your health plan the medical information solely relating to that item or service, we will abide by that restriction unless otherwise required by law.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                E. Right to Request Confidential Communications
              </h3>
              <p className="text-slate-600">
                You have the right to request that we communicate with you about medical matters in a certain way or at a certain location (for example, contacting you only at home or only by mail).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                F. Right to a Paper Copy of This Notice
              </h3>
              <p className="text-slate-600">
                You have the right to a paper copy of this Notice at any time upon request to the Practice’s HIPAA Officer.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                G. Right to Breach Notification
              </h3>
              <p className="text-slate-600">
                In certain instances, we may be obligated to notify you if we become aware that your medical information has been improperly disclosed or otherwise subject to a breach under HIPAA and applicable state law.
              </p>
            </div>
          </div>
        </div>

        {/* Section V: Changes to This Notice */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              V
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Changes to This Notice
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            We reserve the right to change this Notice at any time, along with our privacy policies and practices. We reserve the right to make the revised or changed Notice effective for medical information we already have about you as well as any information we receive in the future. We will post a copy of the current notice in our office and on our website.
          </p>
        </div>

        {/* Section VI: Complaints & Practice Contact Information */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              VI
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Complaints &amp; Contact Information
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            If you believe that your privacy rights as described in this Notice have been violated, you may file a complaint with the Practice or with the Secretary of the U.S. Department of Health and Human Services. <strong>The Practice will not retaliate against any individual who files a complaint.</strong>
          </p>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Practice HIPAA Officer
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900">
                Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston
              </p>
              <p className="text-slate-600 font-semibold">Attn: HIPAA Officer</p>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>2627 Chestnut Ridge Road, Ste 100, Kingwood, TX 77339</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <a href="tel:2813581950" className="font-bold text-blue-700 hover:underline">
                  281-358-1950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
