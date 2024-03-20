import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success rounded className="mb-5">
          {" "}
          <GoBell />
          Click Here !{" "}
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>Exit</Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Save
        </Button>
      </div>
    </div>
  );
}

export default App;
