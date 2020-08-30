import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

const PrimaryLayout = props => (
  <div>
    <SEO />
    <Header />
    <main>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout
