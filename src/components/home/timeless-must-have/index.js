import React from "react"
import { fontSize, centeredarrow } from "./timeless.module.css"
import Fade from "react-reveal/Fade"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Timeless = () => {
  return (
    <StaticQuery
      query={graphql`
        query tieQuery {
          collectionTies: allShopifyCollection {
            nodes {
              products {
                title
              }
              description
              handle
              title
              metafields {
                value
                namespace
                description
                type
              }
              id
            }
          }
        }
      `}
      render={(data) => (
        <>
         <div className="overflow_hidden px-0 px-md-1 d-md-none d-block" style={{"marginLeft":"-15px"}}>
                  <img
                    src="/home/haves-vs-have-knots.jpg"
                    className="img-fluid"
                    alt="essence of styleing"
                  />
                </div>
          <div className="container">
            <div className="col-12">
              <div className="row py-5 text-center text-md-start">
                <div className="col-md-6 my-auto">
                  <div className="py-3 py-md-5 pe-3 pe-md-5 ps-3 ps-md-0 overflow_hidden mt-5 mt-md-0">
                    <Fade left>
                      <h1 className={`${fontSize} Aftika_Bold pb-3`}>
                        The Haves vs Have Knots.
                      </h1>
                    </Fade>
                    <Fade left delay={500}>
                      <p className="Aftika_Light pt-5 pb-3 primary_text">
                        A man who can tell a Windsor from an Atlantic Knot, or
                        can sport a Balthus Knot with stylish ease is, indeed,
                        in a class of his own. A tie is more than an accessory;
                        it tells of a commitment to being distinctively
                        fashionable.
                      </p>
                    </Fade>
                    {data.collectionTies.nodes
                      ?.filter((name) => name.title.includes("Ties"))
                      .map((user) => (
                        <Link to={`/collection/${user.handle}?o=${user.id}`}>
                          <h4 className={`primary_color Aftika_Light font_xs`}>
                            Choose Your Tie
                          </h4>
                        </Link>
                      ))}
                    <img
                      src="/scroll-horizontal.gif"
                      style={{ width: "140px" }}
                      className={centeredarrow}
                      alt="scroll"
                    />
                  </div>
                </div>
                <div className="col-md-6 overflow_hidden px-0 px-md-1 d-none d-md-block">
                  <img
                    src="/home/haves-vs-have-knots.jpg"
                    className="img-fluid"
                    alt="essence of styleing"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    />
  )
}

export default Timeless
