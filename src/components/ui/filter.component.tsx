import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import styles from "../ui/filter.module.less";
import Checkbox from "@material-ui/core/Checkbox";

export default function FilterComponent(): JSX.Element {
  const [checked, setChecked] = useState(true);
  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Distance to center</p>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Inside city center(469)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            2 km to center (159)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            2-5km to center (131)
          </span>
        </div>

        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            7km to center (201)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            10km to center (151)
          </span>
        </div>
      </div>
      {/* </Paper> */}
      {/* <Paper> */}

      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Neighbour</p>

          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Indira Gandhi Int'l Airport(469)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Gurgaon (159)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            South Delhi (131)
          </span>
        </div>

        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            7km to center (201)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            10km to center (151)
          </span>
        </div>
      </div>
      {/* </Paper> */}

      {/* <Paper> */}
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Near Popular Attraction</p>

          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Cannought Place (228)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Chandni Chowk(6)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Hauz khas valley
          </span>
        </div>
      </div>

      {/* </Paper> */}
    </div>
  );
}
