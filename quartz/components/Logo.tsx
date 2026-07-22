import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Logo: QuartzComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="lightLogo" class="logo"></div>
      <div id="darkLogo" class="logo"></div>

      <h6
        id="lob-corp"
        style={{
          margin: 0,
          marginBottom: "0.4rem",
          padding: 0,
          textAlign: "center",
          fontSize: "1rem",
          color: "#b91514",
          letterSpacing: "0.1rem",
          wordSpacing: "0.5rem",
        }}
      >
        LOBOTOMY CORPORATION  
      </h6>

      <h4
        id="face-the-fear"
        style={{
          margin: 0,
          padding: 0,
          textAlign: "center",
          fontSize: "2rem",
          color: "var(--darkgray)",
        }}
      >
        FACE THE FEAR
      </h4>

      <h5
        id="build-the-future"
        style={{
          margin: 0,
          padding: 0,
          textAlign: "center",
          fontSize: "1.5rem",
          color: "var(--darkgray)",
        }}
      >
        BUILD THE FUTURE
      </h5>
    </div>
  )
}

export default (() => Logo) satisfies QuartzComponentConstructor