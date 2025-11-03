'use client';

export default function EmailSignupForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-white text-center mb-4">
        Get 3 Real Case Studies Free
      </h3>
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100">
        <style dangerouslySetInnerHTML={{ __html: `
          #therapycraft-aweber-form .af-body input.text {
            width: 100% !important;
            padding: 14px 16px !important;
            font-size: 16px !important;
            border: 2px solid #e5e7eb !important;
            border-radius: 8px !important;
            background-color: #f9fafb !important;
            color: #000 !important;
            box-sizing: border-box !important;
            margin-top: 0 !important;
            transition: all 0.3s ease !important;
          }
          #therapycraft-aweber-form .af-body input.text:focus {
            border-color: #16a34a !important;
            background-color: #fff !important;
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1) !important;
          }
          #therapycraft-aweber-form .af-body label.previewLabel {
            display: none !important;
          }
          #therapycraft-aweber-form .af-element {
            margin-bottom: 12px !important;
            padding: 0 !important;
          }
          #therapycraft-aweber-form .buttonContainer input.submit {
            width: 100% !important;
            padding: 16px 24px !important;
            font-size: 18px !important;
            font-weight: 600 !important;
            background-color: #16a34a !important;
            color: white !important;
            border: none !important;
            border-radius: 8px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            margin-top: 8px !important;
            box-shadow: 0 4px 6px rgba(22, 163, 74, 0.25) !important;
          }
          #therapycraft-aweber-form .buttonContainer input.submit:hover {
            background-color: #15803d !important;
            transform: translateY(-1px) !important;
            box-shadow: 0 6px 12px rgba(22, 163, 74, 0.3) !important;
          }
          #therapycraft-aweber-form {
            border: none !important;
            background-color: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          #therapycraft-aweber-form .af-body {
            padding: 0 !important;
            background: transparent !important;
          }
          #therapycraft-aweber-form .af-standards .af-element {
            padding: 0 !important;
          }
        ` }} />

        <div id="therapycraft-aweber-form">
          <form method="post" className="af-form-wrapper" acceptCharset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl">
            <div style={{ display: 'none' }}>
              <input type="hidden" name="meta_web_form_id" value="898984390" />
              <input type="hidden" name="meta_split_id" value="" />
              <input type="hidden" name="listname" value="awlist6878292" />
              <input type="hidden" name="redirect" value="https://therapycraft.io/thank-you" />
              <input type="hidden" name="meta_adtracking" value="TherapyCraft_SignUp_Form" />
              <input type="hidden" name="meta_message" value="1" />
              <input type="hidden" name="meta_required" value="name,email" />
              <input type="hidden" name="meta_tooltip" value="" />
            </div>
            <div id="af-form-898984390" className="af-form">
              <div id="af-body-898984390" className="af-body af-standards">
                <div className="af-element">
                  <label className="previewLabel" htmlFor="awf_field-118050731">Name:</label>
                  <div className="af-textWrap">
                    <input
                      id="awf_field-118050731"
                      type="text"
                      name="name"
                      className="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="af-element">
                  <label className="previewLabel" htmlFor="awf_field-118050732">Email:</label>
                  <div className="af-textWrap">
                    <input
                      className="text"
                      id="awf_field-118050732"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="af-element buttonContainer">
                  <input name="submit" className="submit" type="submit" value="Get My Free Guide Now →" />
                </div>
                <div className="af-element tag" style={{ display: 'none' }}>
                  <input id="awf_tag-118050734" type="hidden" name="tag_118050734" value="therapycraft 101 pdf download" />
                </div>
              </div>
            </div>
            <div style={{ display: 'none' }}>
              <img src="https://forms.aweber.com/form/displays.htm?id=HJwcnBwszJwM" alt="" />
            </div>
          </form>
        </div>

        <p className="text-xs text-center text-gray-600 mt-4">
          🔒 Your information is 100% secure. No spam, ever.
        </p>
      </div>

      <p className="text-sm text-center text-white mt-4 font-medium">
        Instant PDF download • No credit card required
      </p>
    </div>
  );
}