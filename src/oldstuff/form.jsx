import { useState,useRef } from "react";

export default function Form(){
    const name=useRef()
    const pwd=useRef()
    const email=useRef()
    const country=useRef()
    const genderfemale=useRef()
    const gendermale=useRef()
    const file=useRef()
    const info=useRef()
    const gecivil=useRef()
    const gestion=useRef()
    const elec=useRef()
    const tel=useRef()
    const age=useRef()
    const date=useRef()
    const url=useRef()
    const comment = useRef()

    const [nameerr,setnameerr]=useState("")
    const [pwderr,setpwderr]=useState("")
    const [emailerr,setemailerr]=useState("")
    const [countryerr,setcountryerr]=useState("")
    const [gendererr,setgendererr]=useState("")
    const [fileerr,setfileerr]=useState("")
    const [formationerr,setformationerr]=useState("")
    const [telerr,settelerr]=useState("")
    const [ageerr,setageerr]=useState("")
    const [dateerr,setdateerr]=useState("")
    const [urlerr,seturlerr]=useState("")
    const [commenterr,setcommenterr]=useState("")

    const handlesub=()=>{
        let invalid=false
        if(!name.current.value || !/^[A-Za-z]{3,}$/.test(name.current.value)){
            setnameerr("invalid name")
            invalid=true
        }else{
            setnameerr("")
        }
        if(!pwd.current.value || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\/\-_*\µ!$%^&+=]).{8,}$/.test(pwd.current.value)){
            setpwderr("invalid pwd")
            invalid=true
        }else{
            setpwderr("")
        }
        if(!comment.current.value || !/^.{3,}$/.test(comment.current.value)){
            setcommenterr("invalid comment")
            invalid=true
        }else{
            setcommenterr("")
        }
        if(!email.current.value || !/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/.test(email.current.value)){
            setemailerr("invalid email")
            invalid=true
        }else{
            setemailerr("")
        }
        if(!tel.current.value || !/^[0-9]{10}$/.test(tel.current.value)){
            settelerr("invalid tel")
            invalid=true
        }else{
            settelerr("")
        }
        if(!age.current.value || !/^[0-9]{1,}$/.test(age.current.value)){
            setageerr("invalid age")
            invalid=true
        }else{
            setageerr("")
        }
        if(!url.current.value || !/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{2,}\.[a-zA-Z]{1,}$/.test(url.current.value)){
            seturlerr("invalid url")
            invalid=true
        }else{
            seturlerr("")
        }
        if(!country.current.value ){
            setcountryerr("invalid country")
            invalid=true
        }else{
            setcountryerr("")
        }
        if(!date.current.value ){
            setdateerr("invalid date")
            invalid=true
        }else{
            setdateerr("")
        }
        if(!file.current.value ){
            setfileerr("invalid file")
            invalid=true
        }else{
            setfileerr("")
        }
        let gender=""
        if(genderfemale.current.checked){
            gender="female"
            setgendererr("")
        }else if(gendermale.current.checked){
            gender="male"
            setgendererr("")
        }else{
            setgendererr("invalid file")
            invalid=true
        }

        let formation = []
        if(info.current.checked)formation.push("informatique")
        if(gecivil.current.checked)formation.push("genie civil")
        if(gestion.current.checked)formation.push("gestion")
        if(elec.current.checked)formation.push("electricite")

        if(formation.length===0){
            setformationerr("select formation")
        }else{
            setformationerr("")
        }
    }

    return(
        <div>
            <input type="text"
            className="form-control"
            ref={name}
            placeholder="fill name">
            </input>
            <p className="text-danger">{nameerr}</p>

            <input type="password"
            className="form-control"
            placeholder="fill pwd"
            ref={pwd}></input>
            <p className="text-danger">{pwderr}</p>

            <input type="email"
            className="form-control"
            ref={email}
            placeholder="fill email">
            </input>
            <p className="text-danger">{emailerr}</p>

            <input type="file"
            ref={file}
            className="form-control"
            placeholder="uploadfile">
            </input>
            <p className="text-danger">{fileerr}</p>

            male:<input type="radio"
            ref={gendermale}
            className="form-check">
            </input>
            female:<input type="radio"
            ref={genderfemale}
            className="form-check">
            </input>
            <p className="text-danger">{gendererr}</p>

            <select className="form-select" ref={country}>
                <option value="morocco">Morocco</option>
                <option value="algeria">Algeria</option>
                <option value="tunisia">Tunisia</option>
            </select>
            <p className="text-danger">{countryerr}</p>

            informatique:<input type="checkbox"
            className="form-check"
            ref={info}></input>
            genie civil:<input type="checkbox"
            className="form-check"
            ref={gecivil}></input>
            gestion:<input type="checkbox"
            className="form-check"
            ref={gestion}></input>
            electricite:<input type="checkbox"
            className="form-check"
            ref={elec}></input>
            <p className="text-danger">{formationerr}</p>

            <input type="number"
            ref={age}
            className="form-control"
            placeholder="fill age">  
            </input>
            <p className="text-danger">{ageerr}</p>

            <input type="tel"
            ref={tel}
            maxLength="10"
            className="form-control"
            placeholder="phone number">
            </input>
            <p className="text-danger">{telerr}</p>

            <input type="date"
            ref={date}
            className="form-control">
            </input>
            <p className="text-danger">{dateerr}</p>

            <input type="url"
            ref={url}
            className="form-control">
            </input>
            <p className="text-danger">{urlerr}</p>

            <textarea ref={comment}>

            </textarea>
            <p className="text-danger">{commenterr}</p>
            <button className="btn btn-primary"
            onClick={handlesub}>submit</button>
        </div>

    )
}