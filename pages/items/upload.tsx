import { AddPhotoIcon } from "../../components/icons";

export default function Upload() {
  return (
    <div>
      <div>
        <div>
          <label>
            <AddPhotoIcon />
            <input type="file" />
          </label>
        </div>
      </div>
      <div>
        <label>Price</label>
        <div>
          <div>
            <span>$</span>
          </div>
          <input type="text" placeholder="0.00" />
          <div>
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <textarea rows={4}></textarea>
        </div>
      </div>
      <button>Upload Product</button>
    </div>
  );
}
