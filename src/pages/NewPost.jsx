import { Link } from "react-router-dom";

export default function NewPost() {
  return (
    <div>
      <header>
        <nav className="space-between">
          <div className="flex">
            <div className="flex">
              <button>
                <img src="./src/hamburger.svg" alt="" />
              </button>
              <Link to="/">
                <img
                  src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                  alt="Logo"
                  className="w-12"
                />
              </Link>
              <div>
                <span class="fs-5">Create Post</span>
              </div>
            </div>
            <div>
              <button type="button">Edith</button>

              <button type="button">Preview</button>
            </div>
            <div class="col-1">
              <button type="button">Preview</button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div>
          <div>
            <h4>Whoops, something went wrong:</h4>
            <p> url/title/description : can't be blank</p>
          </div>
          <div>
            <div>
              <div>
                <span>Add URL cover Image</span>
                <input
                  type="text"
                  id="imageUrl"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>
            <div class="row ps-3">
              <input
                type="text"
                id="postTitle"
                placeholder="New post title here..."
              />
              <div>
                <div id="selectedTagsContainer"></div>
              </div>
              <select
                aria-label=""
                id="tags"
                placeholder="Add up to 4 tags...."
              >
                <option selected>Add up to 4 tags...</option>
              </select>
            </div>
            <input
              type="textarea"
              id="postDescription"
              placeholder="Write your post content here..."
            />
          </div>
          <div id="textInfo"></div>
          <div>
            <div>
              <button type="button" id="saveInfo">
                Save Changes
              </button>
              <button type="button" id="cancelBtn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
