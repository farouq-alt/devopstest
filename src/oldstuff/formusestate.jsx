import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);
  const [formation, setFormation] = useState([]);
  const [tel, setTel] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");

  const [nameerr, setnameerr] = useState("");
  const [pwderr, setpwderr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [countryerr, setcountryerr] = useState("");
  const [gendererr, setgendererr] = useState("");
  const [fileerr, setfileerr] = useState("");
  const [formationerr, setformationerr] = useState("");
  const [telerr, settelerr] = useState("");
  const [ageerr, setageerr] = useState("");
  const [dateerr, setdateerr] = useState("");
  const [urlerr, seturlerr] = useState("");
  const [commenterr, setcommenterr] = useState("");

  const handlesub = () => {
    let invalid = false;

    if (!name || !/^[A-Za-z]{3,}$/.test(name)) {
      setnameerr("invalid name");
      invalid = true;
    } else setnameerr("");

    if (
      !pwd ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\/\-_*\µ!$%^&+=]).{8,}$/.test(
        pwd,
      )
    ) {
      setpwderr("invalid pwd");
      invalid = true;
    } else setpwderr("");

    if (!comment || !/^.{3,}$/.test(comment)) {
      setcommenterr("invalid comment");
      invalid = true;
    } else setcommenterr("");

    if (!email || !/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/.test(email)) {
      setemailerr("invalid email");
      invalid = true;
    } else setemailerr("");

    if (!tel || !/^[0-9]{10}$/.test(tel)) {
      settelerr("invalid tel");
      invalid = true;
    } else settelerr("");

    if (!age || !/^[0-9]+$/.test(age)) {
      setageerr("invalid age");
      invalid = true;
    } else setageerr("");

    if (
      !url ||
      !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{2,}\.[a-zA-Z]{1,}$/.test(url)
    ) {
      seturlerr("invalid url");
      invalid = true;
    } else seturlerr("");

    if (!country) {
      setcountryerr("invalid country");
      invalid = true;
    } else setcountryerr("");

    if (!date) {
      setdateerr("invalid date");
      invalid = true;
    } else setdateerr("");

    if (!file) {
      setfileerr("invalid file");
      invalid = true;
    } else {
      let exp = file.name.split(".");
      let part = exp[exp.length - 1].toLowercase();
      validate = ["png", "jpg"];
      if (part.includes(validate)) {
        invalid = false;
        setfileerr("");
      } else {
        invalid = true;
        setfileerr("invalid file");
      }
    }

    if (!gender) {
      setgendererr("invalid gender");
      invalid = true;
    } else setgendererr("");

    if (formation.length === 0) {
      setformationerr("select formation");
      invalid = true;
    } else setformationerr("");

    if (!invalid) {
      alert("Form submitted successfully!");
    }
  };

  const handleFormationChange = (value) => {
    setFormation((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value],
    );
  };

  return (
    <div className="p-3">
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="fill name"
      />
      <p className="text-danger">{nameerr}</p>

      <input
        type="password"
        className="form-control"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="fill pwd"
      />
      <p className="text-danger">{pwderr}</p>

      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="fill email"
      />
      <p className="text-danger">{emailerr}</p>

      <input
        type="file"
        className="form-control"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <p className="text-danger">{fileerr}</p>

      <div>
        male:
        <input
          type="radio"
          name="gender"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        female:
        <input
          type="radio"
          name="gender"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
      </div>
      <p className="text-danger">{gendererr}</p>

      <select
        className="form-select"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="morocco">Morocco</option>
        <option value="algeria">Algeria</option>
        <option value="tunisia">Tunisia</option>
      </select>
      <p className="text-danger">{countryerr}</p>

      <div>
        informatique:
        <input
          type="checkbox"
          checked={formation.includes("informatique")}
          onChange={() => handleFormationChange("informatique")}
        />
        genie civil:
        <input
          type="checkbox"
          checked={formation.includes("genie civil")}
          onChange={() => handleFormationChange("genie civil")}
        />
        gestion:
        <input
          type="checkbox"
          checked={formation.includes("gestion")}
          onChange={() => handleFormationChange("gestion")}
        />
        electricite:
        <input
          type="checkbox"
          checked={formation.includes("electricite")}
          onChange={() => handleFormationChange("electricite")}
        />
      </div>
      <p className="text-danger">{formationerr}</p>

      <input
        type="number"
        className="form-control"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="fill age"
      />
      <p className="text-danger">{ageerr}</p>

      <input
        type="tel"
        maxLength="10"
        className="form-control"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="phone number"
      />
      <p className="text-danger">{telerr}</p>

      <input
        type="date"
        className="form-control"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <p className="text-danger">{dateerr}</p>

      <input
        type="url"
        className="form-control"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <p className="text-danger">{urlerr}</p>

      <textarea
        className="form-control"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <p className="text-danger">{commenterr}</p>

      <button className="btn btn-primary" onClick={handlesub}>
        Submit
      </button>
    </div>
  );
}
