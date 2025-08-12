import React from 'react'

function Footer() {
  return (
    <>
 <div style={{
  backgroundColor: "#320033",
  color: "#FDFBF9",
  marginTop: "auto", // pushes footer to bottom when using flex layout
  padding: "2rem 1rem"
}}>
  {/* Top section */}
  <div className="text-center px-4 py-4">
    <h1 className="text-2xl md:text-3xl font-bold mb-2">
      Guarantee success for your business
    </h1>
    <h6 className="text-sm md:text-base">
      15-day free trial. No credit card. Instant product access.
    </h6>
  </div>

  {/* Divider */}
  <hr style={{ borderColor: "#FDFBF9", opacity: 0.3, margin: "1rem auto", width: "80%" }} />

  {/* Bottom section */}
  <div className="text-center text-xs md:text-sm leading-relaxed">
    <p>Vestira is a division of Zoho Corporation.</p>
    <p className="mt-1">© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
  </div>
</div>

    </>
  )
}

export default Footer