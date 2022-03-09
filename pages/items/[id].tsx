import { HeartIcon } from "../../components/icons";

export default function ItemDetail() {
  return (
    <div>
      <div>
        <div />
        <div>
          <p>Steve Jobs</p>
          <p>View profile &rarr;</p>
        </div>
      </div>
      <div>
        <h1>Galaxy S50</h1>
        <p>$1500</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis est
          labore corrupti laudantium! Corrupti, quos corporis? Amet labore
          deleniti dolorem expedita odit ut non saepe distinctio aperiam,
          inventore, ipsa eius corrupti maxime. Amet maxime obcaecati soluta
          corporis ab dolor aperiam eaque! Atque vel, maxime quae assumenda
          saepe repudiandae error dolorem!
        </p>
        <div>
          <button>Talk to seller</button>
          <button>
            <HeartIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div>
        <h2>Similar items</h2>
        <div>
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div key={index}>
                <div />
                <h3>Galaxy S60</h3>
                <p>$1600</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
