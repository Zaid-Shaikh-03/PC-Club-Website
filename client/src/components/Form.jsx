import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [acYr, setAcYr] = useState("");
  const [roll, setRoll] = useState("");
  const [domain, setDomain] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");


  const submit = async (e) => {
    e.preventDefault();
    let userData = {
      name: name, email: email, branch: branch, acYr: acYr, roll: roll, domain: domain, q1: q1, q2: q2
    }
    try {
      await Axios.post("http://localhost:5000", { userData });
      setName("");
      setEmail("");
      setBranch("");
      setAcYr("");
      setRoll("");
      setDomain("");
      setQ1("");
      setQ2("");
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="m-6 ">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <img src="./img/logo_pc.png" alt="Logo" class="w-30 h-20" />
          </div>
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Form</h1>

          <form onSubmit={submit} action="POST">
            {/* ... (other form elements) */}

            <div className="mb-4">
              <label htmlFor="Name" className="block mb-2 text-sm text-gray-600">Enter your Name</label>
              <input type="text" id="Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Enter your College Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>


            <div className="mb-4">
              <label htmlFor="Branch" className="block mb-2 text-sm text-gray-600">Enter your Department</label>
              <input type="text" id="Branch" name="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="ac_yr" className="block mb-2 text-sm text-gray-600">Enter your Year</label>
              <input type="number" id="ac_yr" name="ac_yr" value={acYr} onChange={(e) => setAcYr(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>

            <div className="mb-4">
              <label htmlFor="roll" className="block mb-2 text-sm text-gray-600">Enter your Roll Number</label>
              <input type="number" id="roll" name="roll" value={roll} onChange={(e) => setRoll(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="Domain" className="block mb-2 text-sm text-gray-600">intrested Domain</label>
              <input type="text" id="domain" name="domain" value={domain} onChange={(e) => setDomain(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>

            <div className="mb-6">
              <label htmlFor="q1" className="block mb-2 text-sm text-gray-600">In this domain what kind of work you can do ?</label>
              <textarea type="text" id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>

            <div className="mb-6">
              <label htmlFor="q2" className="block mb-2 text-sm text-gray-600">Why you want to join ?</label>
              <textarea type="text" id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>


            <button type="submit" className="w-32 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-2">Submit</button>
          </form>

        </div>
      </div>
    </div>

  );
}

