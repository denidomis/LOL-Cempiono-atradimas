import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Champions from "./components/Champions";

const Calculator = () => {
  const [DPS, setDPS] = useState("");
  const [TM, setTM] = useState("");
  const [CCS, setCCS] = useState("");
  const [ME, setME] = useState("");
  const [UD, setUD] = useState("");
  const [RA, setRA] = useState("");

  const [DP, setDP] = useState("");
  const [TP, setTP] = useState("");
  const [CCP, setCCP] = useState("");
  const [MP, setMP] = useState("");
  const [UP, setUP] = useState("");
  const [RP, setRP] = useState("");

  const [Burst, setBurst] = useState();
  const [Sustain, setSustain] = useState();
  const [Hard, setHard] = useState();
  const [Reposition, setReposition] = useState();
  const [Offensive, setOffensive] = useState();
  const [Abilities, setAbilities] = useState();

  useEffect(() => {
    setBurst(5 - DPS);
  }, [DPS]);
  useEffect(() => {
    setSustain(5 - TM);
  }, [TM]);
  useEffect(() => {
    setHard(5 - CCS);
  }, [CCS]);
  useEffect(() => {
    setReposition(5 - ME);
  }, [ME]);
  useEffect(() => {
    setOffensive(5 - UD);
  }, [UD]);
  useEffect(() => {
    setAbilities(5 - RA);
  }, [RA]);

  //First row
  const [AD, setAD] = useState("");
  useEffect(() => {
    setAD(
      3 * (5 - Math.abs(DP - 5)) +
        (5 - 0.5 * Math.abs(DPS - 0) - 0.5 * Math.abs(Burst - 5))
    );
  }, [DP, DPS, Burst]);
  const [AT, setAT] = useState("");
  useEffect(() => {
    setAT(
      3 * (5 - Math.abs(TP - 1)) +
        (5 - 0.5 * Math.abs(TM - 1) - 0.5 * Math.abs(Sustain - 4))
    );
  }, [TP, TM, Sustain]);
  const [ACC, setACC] = useState("");
  useEffect(() => {
    setACC(
      3 * (5 - Math.abs(CCP - 2)) +
        (5 - 0.5 * Math.abs(CCS - 4) - 0.5 * Math.abs(Hard - 1))
    );
  }, [CCP, CCS, Hard]);
  const [AM, setAM] = useState("");
  useEffect(() => {
    setAM(
      3 * (5 - Math.abs(MP - 5)) +
        (5 - 0.5 * Math.abs(ME - 3) - 0.5 * Math.abs(Reposition - 2))
    );
  }, [MP, ME, Reposition]);
  const [AU, setAU] = useState("");
  useEffect(() => {
    setAU(
      3 * (5 - Math.abs(UP - 1)) +
        (5 - 0.5 * Math.abs(UD - 0) - 0.5 * Math.abs(Offensive - 5))
    );
  }, [UP, UD, Offensive]);
  const [AR, setAR] = useState("");
  useEffect(() => {
    setAR(
      3 * (5 - Math.abs(RP - 2)) +
        (5 - 0.5 * Math.abs(RP - 0) - 0.5 * Math.abs(Abilities - 5))
    );
  }, [RP, RA, Abilities]);

  //Secont row
  const [SD, setSD] = useState("");
  useEffect(() => {
    setSD(
      3 * (5 - Math.abs(DP - 5)) +
        (5 - 0.5 * Math.abs(DPS - 3) - 0.5 * Math.abs(Burst - 2))
    );
  }, [DP, DPS, Burst]);
  const [ST, setST] = useState("");
  useEffect(() => {
    setST(
      3 * (5 - Math.abs(TP - 3)) +
        (5 - 0.5 * Math.abs(TM - 2) - 0.5 * Math.abs(Sustain - 3))
    );
  }, [TP, TM, Sustain]);
  const [SCC, setSCC] = useState("");
  useEffect(() => {
    setSCC(
      3 * (5 - Math.abs(CCP - 2)) +
        (5 - 0.5 * Math.abs(CCS - 1) - 0.5 * Math.abs(Hard - 4))
    );
  }, [CCP, CCS, Hard]);
  const [SM, setSM] = useState("");
  useEffect(() => {
    setSM(
      3 * (5 - Math.abs(MP - 5)) +
        (5 - 0.5 * Math.abs(ME - 1) - 0.5 * Math.abs(Reposition - 4))
    );
  }, [MP, ME, Reposition]);
  const [SU, setSU] = useState("");
  useEffect(() => {
    setSU(
      3 * (5 - Math.abs(UP - 1)) +
        (5 - 0.5 * Math.abs(UD - 1) - 0.5 * Math.abs(Offensive - 4))
    );
  }, [UP, UD, Offensive]);
  const [SR, setSR] = useState("");
  useEffect(() => {
    setSR(
      3 * (5 - Math.abs(RP - 1)) +
        (5 - 0.5 * Math.abs(RA - 2) - 0.5 * Math.abs(Abilities - 3))
    );
  }, [RP, RA, Abilities]);

  //Third row
  const [DD, setDD] = useState("");
  useEffect(() => {
    setDD(
      3 * (5 - Math.abs(DP - 3)) +
        (5 - 0.5 * Math.abs(DPS - 2) - 0.5 * Math.abs(Burst - 3))
    );
  }, [DP, DPS, Burst]);
  const [DT, setDT] = useState("");
  useEffect(() => {
    setDT(
      3 * (5 - Math.abs(TP - 4)) +
        (5 - 0.5 * Math.abs(TM - 2) - 0.5 * Math.abs(Sustain - 3))
    );
  }, [TP, TM, Sustain]);
  const [DCC, setDCC] = useState("");
  useEffect(() => {
    setDCC(
      3 * (5 - Math.abs(CCP - 4)) +
        (5 - 0.5 * Math.abs(CCS - 0) - 0.5 * Math.abs(Hard - 5))
    );
  }, [CCP, CCS, Hard]);
  const [DM, setDM] = useState("");
  useEffect(() => {
    setDM(
      3 * (5 - Math.abs(MP - 5)) +
        (5 - 0.5 * Math.abs(ME - 4) - 0.5 * Math.abs(Reposition - 1))
    );
  }, [MP, ME, Reposition]);
  const [DU, setDU] = useState("");
  useEffect(() => {
    setDU(
      3 * (5 - Math.abs(UP - 1)) +
        (5 - 0.5 * Math.abs(UD - 2) - 0.5 * Math.abs(Offensive - 3))
    );
  }, [UP, UD, Offensive]);
  const [DR, setDR] = useState("");
  useEffect(() => {
    setDR(
      3 * (5 - Math.abs(RP - 1)) +
        (5 - 0.5 * Math.abs(RA - 3) - 0.5 * Math.abs(Abilities - 2))
    );
  }, [RP, RA, Abilities]);

  //Forth row
  const [JD, setJD] = useState("");
  useEffect(() => {
    setJD(
      3 * (5 - Math.abs(DP - 4)) +
        (5 - 0.5 * Math.abs(DPS - 4) - 0.5 * Math.abs(Burst - 1))
    );
  }, [DP, DPS, Burst]);
  const [JT, setJT] = useState("");
  useEffect(() => {
    setJT(
      3 * (5 - Math.abs(TP - 5)) +
        (5 - 0.5 * Math.abs(TM - 1) - 0.5 * Math.abs(Sustain - 4))
    );
  }, [TP, TM, Sustain]);
  const [JCC, setJCC] = useState("");
  useEffect(() => {
    setJCC(
      3 * (5 - Math.abs(CCP - 1)) +
        (5 - 0.5 * Math.abs(CCS - 3) - 0.5 * Math.abs(Hard - 2))
    );
  }, [CCP, CCS, Hard]);
  const [JM, setJM] = useState("");
  useEffect(() => {
    setJM(
      3 * (5 - Math.abs(MP - 2)) +
        (5 - 0.5 * Math.abs(ME - 2) - 0.5 * Math.abs(Reposition - 3))
    );
  }, [MP, ME, Reposition]);
  const [JU, setJU] = useState("");
  useEffect(() => {
    setJU(
      3 * (5 - Math.abs(UP - 1)) +
        (5 - 0.5 * Math.abs(UD - 3) - 0.5 * Math.abs(Offensive - 2))
    );
  }, [UP, UD, Offensive]);
  const [JR, setJR] = useState("");
  useEffect(() => {
    setJR(
      3 * (5 - Math.abs(RP - 2)) +
        (5 - 0.5 * Math.abs(RA - 2) - 0.5 * Math.abs(Abilities - 3))
    );
  }, [RP, RA, Abilities]);

  //Fifth row
  const [VD, setVD] = useState("");
  useEffect(() => {
    setVD(
      3 * (5 - Math.abs(DP - 2)) +
        (5 - 0.5 * Math.abs(DPS - 3) - 0.5 * Math.abs(Burst - 2))
    );
  }, [DP, DPS, Burst]);
  const [VT, setVT] = useState("");
  useEffect(() => {
    setVT(
      3 * (5 - Math.abs(TP - 5)) +
        (5 - 0.5 * Math.abs(TM - 5) - 0.5 * Math.abs(Sustain - 0))
    );
  }, [TP, TM, Sustain]);
  const [VCC, setVCC] = useState("");
  useEffect(() => {
    setVCC(
      3 * (5 - Math.abs(CCP - 5)) +
        (5 - 0.5 * Math.abs(CCS - 0) - 0.5 * Math.abs(Hard - 5))
    );
  }, [CCP, CCS, Hard]);
  const [VM, setVM] = useState("");
  useEffect(() => {
    setVM(
      3 * (5 - Math.abs(MP - 4)) +
        (5 - 0.5 * Math.abs(ME - 5) - 0.5 * Math.abs(Reposition - 0))
    );
  }, [MP, ME, Reposition]);
  const [VU, setVU] = useState("");
  useEffect(() => {
    setVU(
      3 * (5 - Math.abs(UP - 2)) +
        (5 - 0.5 * Math.abs(UD - 5) - 0.5 * Math.abs(Offensive - 0))
    );
  }, [UP, UD, Offensive]);
  const [VR, setVR] = useState("");
  useEffect(() => {
    setVR(
      3 * (5 - Math.abs(RP - 2)) +
        (5 - 0.5 * Math.abs(RA - 1) - 0.5 * Math.abs(Abilities - 4))
    );
  }, [RP, RA, Abilities]);

  //Sixth row
  const [WD, setWD] = useState("");
  useEffect(() => {
    setWD(
      3 * (5 - Math.abs(DP - 2)) +
        (5 - 0.5 * Math.abs(DPS - 4) - 0.5 * Math.abs(Burst - 1))
    );
  }, [DP, DPS, Burst]);
  const [WT, setWT] = useState("");
  useEffect(() => {
    setWT(
      3 * (5 - Math.abs(TP - 5)) +
        (5 - 0.5 * Math.abs(TM - 4) - 0.5 * Math.abs(Sustain - 1))
    );
  }, [TP, TM, Sustain]);
  const [WCC, setWCC] = useState("");
  useEffect(() => {
    setWCC(
      3 * (5 - Math.abs(CCP - 5)) +
        (5 - 0.5 * Math.abs(CCS - 2) - 0.5 * Math.abs(Hard - 3))
    );
  }, [CCP, CCS, Hard]);
  const [WM, setWM] = useState("");
  useEffect(() => {
    setWM(
      3 * (5 - Math.abs(MP - 3)) +
        (5 - 0.5 * Math.abs(ME - 4) - 0.5 * Math.abs(Reposition - 1))
    );
  }, [MP, ME, Reposition]);
  const [WU, setWU] = useState("");
  useEffect(() => {
    setWU(
      3 * (5 - Math.abs(UP - 4)) +
        (5 - 0.5 * Math.abs(UD - 4) - 0.5 * Math.abs(Offensive - 1))
    );
  }, [UP, UD, Offensive]);
  const [WR, setWR] = useState("");
  useEffect(() => {
    setWR(
      3 * (5 - Math.abs(RP - 1)) +
        (5 - 0.5 * Math.abs(RA - 1) - 0.5 * Math.abs(Abilities - 4))
    );
  }, [RP, RA, Abilities]);

  //Seventh row
  const [CD, setCD] = useState("");
  useEffect(() => {
    setCD(
      3 * (5 - Math.abs(DP - 3)) +
        (5 - 0.5 * Math.abs(DPS - 3) - 0.5 * Math.abs(Burst - 2))
    );
  }, [DP, DPS, Burst]);
  const [CT, setCT] = useState("");
  useEffect(() => {
    setCT(
      3 * (5 - Math.abs(TP - 2)) +
        (5 - 0.5 * Math.abs(TM - 4) - 0.5 * Math.abs(Sustain - 1))
    );
  }, [TP, TM, Sustain]);
  const [CCC, setCCC] = useState("");
  useEffect(() => {
    setCCC(
      3 * (5 - Math.abs(CCP - 5)) +
        (5 - 0.5 * Math.abs(CCS - 1) - 0.5 * Math.abs(Hard - 4))
    );
  }, [CCP, CCS, Hard]);
  const [CM, setCM] = useState("");
  useEffect(() => {
    setCM(
      3 * (5 - Math.abs(MP - 3)) +
        (5 - 0.5 * Math.abs(ME - 3) - 0.5 * Math.abs(Reposition - 2))
    );
  }, [MP, ME, Reposition]);
  const [CU, setCU] = useState("");
  useEffect(() => {
    setCU(
      3 * (5 - Math.abs(UP - 3)) +
        (5 - 0.5 * Math.abs(UD - 4) - 0.5 * Math.abs(Offensive - 1))
    );
  }, [UP, UD, Offensive]);
  const [CR, setCR] = useState("");
  useEffect(() => {
    setCR(
      3 * (5 - Math.abs(RP - 3)) +
        (5 - 0.5 * Math.abs(RA - 2) - 0.5 * Math.abs(Abilities - 3))
    );
  }, [RP, RA, Abilities]);

  //Eight row
  const [ED, setED] = useState("");
  useEffect(() => {
    setED(
      3 * (5 - Math.abs(DP - 1)) +
        (5 - 0.5 * Math.abs(DPS - 2) - 0.5 * Math.abs(Burst - 3))
    );
  }, [DP, DPS, Burst]);
  const [ET, setET] = useState("");
  useEffect(() => {
    setET(
      3 * (5 - Math.abs(TP - 1)) +
        (5 - 0.5 * Math.abs(TM - 2) - 0.5 * Math.abs(Sustain - 3))
    );
  }, [TP, TM, Sustain]);
  const [ECC, setECC] = useState("");
  useEffect(() => {
    setECC(
      3 * (5 - Math.abs(CCP - 4)) +
        (5 - 0.5 * Math.abs(CCS - 2) - 0.5 * Math.abs(Hard - 3))
    );
  }, [CCP, CCS, Hard]);
  const [EM, setEM] = useState("");
  useEffect(() => {
    setEM(
      3 * (5 - Math.abs(MP - 2)) +
        (5 - 0.5 * Math.abs(ME - 0) - 0.5 * Math.abs(Reposition - 5))
    );
  }, [MP, ME, Reposition]);
  const [EU, setEU] = useState("");
  useEffect(() => {
    setEU(
      3 * (5 - Math.abs(UP - 5)) +
        (5 - 0.5 * Math.abs(UD - 3) - 0.5 * Math.abs(Offensive - 2))
    );
  }, [UP, UD, Offensive]);
  const [ER, setER] = useState("");
  useEffect(() => {
    setER(
      3 * (5 - Math.abs(RP - 4)) +
        (5 - 0.5 * Math.abs(RA - 2) - 0.5 * Math.abs(Abilities - 3))
    );
  }, [RP, RA, Abilities]);

  //Nineth row
  const [AMD, setAMD] = useState("");
  useEffect(() => {
    setAMD(
      3 * (5 - Math.abs(DP - 5)) +
        (5 - 0.5 * Math.abs(DPS - 2) - 0.5 * Math.abs(Burst - 3))
    );
  }, [DP, DPS, Burst]);
  const [AMT, setAMT] = useState("");
  useEffect(() => {
    setAMT(
      3 * (5 - Math.abs(TP - 1)) +
        (5 - 0.5 * Math.abs(TM - 3) - 0.5 * Math.abs(Sustain - 2))
    );
  }, [TP, TM, Sustain]);
  const [AMCC, setAMCC] = useState("");
  useEffect(() => {
    setAMCC(
      3 * (5 - Math.abs(CCP - 3)) +
        (5 - 0.5 * Math.abs(CCS - 1) - 0.5 * Math.abs(Hard - 4))
    );
  }, [CCP, CCS, Hard]);
  const [AMM, setAMM] = useState("");
  useEffect(() => {
    setAMM(
      3 * (5 - Math.abs(MP - 1)) +
        (5 - 0.5 * Math.abs(ME - 2) - 0.5 * Math.abs(Reposition - 3))
    );
  }, [MP, ME, Reposition]);
  const [AMU, setAMU] = useState("");
  useEffect(() => {
    setAMU(
      3 * (5 - Math.abs(UP - 1)) +
        (5 - 0.5 * Math.abs(UD - 4) - 0.5 * Math.abs(Offensive - 1))
    );
  }, [UP, UD, Offensive]);
  const [AMR, setAMR] = useState("");
  useEffect(() => {
    setAMR(
      3 * (5 - Math.abs(RP - 5)) +
        (5 - 0.5 * Math.abs(RA - 0) - 0.5 * Math.abs(Abilities - 5))
    );
  }, [RP, RA, Abilities]);

  //Tenth row
  const [BMD, setBMD] = useState("");
  useEffect(() => {
    setBMD(
      3 * (5 - Math.abs(DP - 5)) +
        (5 - 0.5 * Math.abs(DPS - 1) - 0.5 * Math.abs(Burst - 4))
    );
  }, [DP, DPS, Burst]);
  const [BMT, setBMT] = useState("");
  useEffect(() => {
    setBMT(
      3 * (5 - Math.abs(TP - 1)) +
        (5 - 0.5 * Math.abs(TM - 4) - 0.5 * Math.abs(Sustain - 1))
    );
  }, [TP, TM, Sustain]);
  const [BMCC, setBMCC] = useState("");
  useEffect(() => {
    setBMCC(
      3 * (5 - Math.abs(CCP - 4)) +
        (5 - 0.5 * Math.abs(CCS - 1) - 0.5 * Math.abs(Hard - 4))
    );
  }, [CCP, CCS, Hard]);
  const [BMM, setBMM] = useState("");
  useEffect(() => {
    setBMM(
      3 * (5 - Math.abs(MP - 2)) +
        (5 - 0.5 * Math.abs(ME - 4) - 0.5 * Math.abs(Reposition - 1))
    );
  }, [MP, ME, Reposition]);
  const [BMU, setBMU] = useState("");
  useEffect(() => {
    setBMU(
      3 * (5 - Math.abs(UP - 2)) +
        (5 - 0.5 * Math.abs(UD - 4) - 0.5 * Math.abs(Offensive - 1))
    );
  }, [UP, UD, Offensive]);
  const [BMR, setBMR] = useState("");
  useEffect(() => {
    setBMR(
      3 * (5 - Math.abs(RP - 4)) +
        (5 - 0.5 * Math.abs(RA - 1) - 0.5 * Math.abs(Abilities - 4))
    );
  }, [RP, RA, Abilities]);

  //Eleventh row
  const [BAD, setBAD] = useState("");
  useEffect(() => {
    setBAD(
      3 * (5 - Math.abs(DP - 5)) +
        (5 - 0.5 * Math.abs(DPS - 4) - 0.5 * Math.abs(Burst - 1))
    );
  }, [DP, DPS, Burst]);
  const [BAT, setBAT] = useState("");
  useEffect(() => {
    setBAT(
      3 * (5 - Math.abs(TP - 3)) +
        (5 - 0.5 * Math.abs(TM - 1) - 0.5 * Math.abs(Sustain - 4))
    );
  }, [TP, TM, Sustain]);
  const [BACC, setBACC] = useState("");
  useEffect(() => {
    setBACC(
      3 * (5 - Math.abs(CCP - 3)) +
        (5 - 0.5 * Math.abs(CCS - 2) - 0.5 * Math.abs(Hard - 3))
    );
  }, [CCP, CCS, Hard]);
  const [BAM, setBAM] = useState("");
  useEffect(() => {
    setBAM(
      3 * (5 - Math.abs(MP - 1)) +
        (5 - 0.5 * Math.abs(ME - 1) - 0.5 * Math.abs(Reposition - 4))
    );
  }, [MP, ME, Reposition]);
  const [BAU, setBAU] = useState("");
  useEffect(() => {
    setBAU(
      3 * (5 - Math.abs(UP - 2)) +
        (5 - 0.5 * Math.abs(UD - 1) - 0.5 * Math.abs(Offensive - 4))
    );
  }, [UP, UD, Offensive]);
  const [BAR, setBAR] = useState("");
  useEffect(() => {
    setBAR(
      3 * (5 - Math.abs(RP - 3)) +
        (5 - 0.5 * Math.abs(RA - 1) - 0.5 * Math.abs(Abilities - 4))
    );
  }, [RP, RA, Abilities]);

  //Twelth row
  const [MD, setMD] = useState("");
  useEffect(() => {
    setMD(
      3 * (5 - Math.abs(DP - 5)) +
        (5 - 0.5 * Math.abs(DPS - 5) - 0.5 * Math.abs(Burst - 0))
    );
  }, [DP, DPS, Burst]);
  const [MT, setMT] = useState("");
  useEffect(() => {
    setMT(
      3 * (5 - Math.abs(TP - 1)) +
        (5 - 0.5 * Math.abs(TM - 0) - 0.5 * Math.abs(Sustain - 5))
    );
  }, [TP, TM, Sustain]);
  const [MCC, setMCC] = useState("");
  useEffect(() => {
    setMCC(
      3 * (5 - Math.abs(CCP - 2)) +
        (5 - 0.5 * Math.abs(CCS - 3) - 0.5 * Math.abs(Hard - 2))
    );
  }, [CCP, CCS, Hard]);
  const [MM, setMM] = useState("");
  useEffect(() => {
    setMM(
      3 * (5 - Math.abs(MP - 2)) +
        (5 - 0.5 * Math.abs(ME - 1) - 0.5 * Math.abs(Reposition - 4))
    );
  }, [MP, ME, Reposition]);
  const [MU, setMU] = useState("");
  useEffect(() => {
    setMU(
      3 * (5 - Math.abs(UP - 2)) +
        (5 - 0.5 * Math.abs(UD - 3) - 0.5 * Math.abs(Offensive - 2))
    );
  }, [UP, UD, Offensive]);
  const [MR, setMR] = useState("");
  useEffect(() => {
    setMR(
      3 * (5 - Math.abs(RP - 5)) +
        (5 - 0.5 * Math.abs(RA - 4) - 0.5 * Math.abs(Abilities - 1))
    );
  }, [RP, RA, Abilities]);

  const [Weighted1, setWeighted1] = useState("");
  useEffect(() => {
    setWeighted1(DP * AD + TP * AT + CCP * ACC + MP * AU + UP * AR);
  }, [DP, AD, AT, ACC, AU, AR, TP, CCP, MP, UP]);
  const [Weighted2, setWeighted2] = useState("");
  useEffect(() => {
    setWeighted2(DP * SD + TP * ST + CCP * SCC + MP * SU + UP * SR);
  }, [DP, SD, ST, SCC, SU, SR, TP, CCP, MP, UP]);
  const [Weighted3, setWeighted3] = useState("");
  useEffect(() => {
    setWeighted3(DP * DD + TP * DT + CCP * DCC + MP * DU + UP * DR);
  }, [DP, DD, DT, DCC, DU, DR, TP, CCP, MP, UP]);
  const [Weighted4, setWeighted4] = useState("");
  useEffect(() => {
    setWeighted4(DP * JD + TP * JT + CCP * JCC + MP * JU + UP * JR);
  }, [DP, JD, JT, JCC, JU, JR, TP, CCP, MP, UP]);
  const [Weighted5, setWeighted5] = useState("");
  useEffect(() => {
    setWeighted5(DP * VD + TP * VT + CCP * VCC + MP * VU + UP * VR);
  }, [DP, VD, VT, VCC, VU, VR, TP, CCP, MP, UP]);
  const [Weighted6, setWeighted6] = useState("");
  useEffect(() => {
    setWeighted6(DP * WD + TP * WT + CCP * WCC + MP * WU + UP * WR);
  }, [DP, WD, WT, WCC, WU, WR, TP, CCP, MP, UP]);
  const [Weighted7, setWeighted7] = useState("");
  useEffect(() => {
    setWeighted7(DP * CD + TP * CT + CCP * CCC + MP * CU + UP * CR);
  }, [DP, CD, CT, CCC, CU, CR, TP, CCP, MP, UP]);
  const [Weighted8, setWeighted8] = useState("");
  useEffect(() => {
    setWeighted8(DP * ED + TP * ET + CCP * ECC + MP * EU + UP * ER);
  }, [DP, ED, ET, ECC, EU, ER, TP, CCP, MP, UP]);
  const [Weighted9, setWeighted9] = useState("");
  useEffect(() => {
    setWeighted9(DP * AMD + TP * AMT + CCP * AMCC + MP * AMU + UP * AMR);
  }, [DP, AMD, AMT, AMCC, AMU, AMR, TP, CCP, MP, UP]);
  const [Weighted10, setWeighted10] = useState("");
  useEffect(() => {
    setWeighted10(DP * BMD + TP * BMT + CCP * BMCC + MP * BMU + UP * BMR);
  }, [DP, BMD, BMT, BMCC, BMU, BMR, TP, CCP, MP, UP]);
  const [Weighted11, setWeighted11] = useState("");
  useEffect(() => {
    setWeighted11(DP * BAD + TP * BAT + CCP * BACC + MP * BAU + UP * BAR);
  }, [DP, BAD, BAT, BACC, BAU, BAR, TP, CCP, MP, UP]);
  const [Weighted12, setWeighted12] = useState("");
  useEffect(() => {
    setWeighted12(DP * MD + TP * MT + CCP * MCC + MP * MU + UP * MR);
  }, [DP, MD, MT, MCC, MU, MR, TP, CCP, MP, UP]);

  const array = [
    Weighted1,
    Weighted2,
    Weighted3,
    Weighted4,
    Weighted5,
    Weighted6,
    Weighted7,
    Weighted8,
    Weighted9,
    Weighted10,
    Weighted11,
    Weighted12,
  ];

  const [First, setFirst] = useState("");
  const [Second, setSecond] = useState("");
  const [Third, setThird] = useState("");

  const [one, setone] = useState("");
  const [two, settwo] = useState("");
  const [three, setthree] = useState("");

  useEffect(() => {
    const sortedArray = array.sort((a, b) => (a.value > b.value ? 1 : -1));
    setFirst(sortedArray[sortedArray.length - 1]);
    setSecond(sortedArray[sortedArray.length - 2]);
    setThird(sortedArray[sortedArray.length - 3]);
  }, [array]);

  return (
    <div>
      <table border={1} className="inlineTable" id="table2">
        <tbody>
          <tr>
            <td />
            <td>Pirmenybė</td>
            <td>ŽPS</td>
            <td>Staigus šaudymas</td>
          </tr>
          <tr>
            <td>Žala</td>
            <td>
              <input
                type="number"
                id="DP"
                value={DP}
                onChange={(e) => setDP(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                name="DPS"
                id="DPS"
                value={DPS}
                onChange={(e) => setDPS(e.target.value)}
              />
            </td>
            <td>{Burst}</td>
          </tr>
          <tr>
            <td />
            <td>Pirmenybė</td>
            <td>Sušvelninimas</td>
            <td>Išlaikymas</td>
          </tr>
          <tr>
            <td>Tvirtumas</td>
            <td>
              <input
                type="number"
                id="TP"
                value={TP}
                onChange={(e) => setTP(e.target.value)}
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                name="TM"
                id="TM"
                value={TM}
                onChange={(e) => setTM(e.target.value)}
              />
            </td>
            <td>{Sustain}</td>
          </tr>
          <tr>
            <td />
            <td>Pirmenybė</td>
            <td>Minkštas</td>
            <td>Kietas</td>
          </tr>
          <tr>
            <td>Minios valdymas</td>
            <td>
              <input
                type="number"
                id="CCP"
                value={CCP}
                onChange={(e) => setCCP(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                name="CCS"
                id="CCS"
                value={CCS}
                onChange={(e) => setCCS(e.target.value)}
              />
            </td>
            <td>{Hard}</td>
          </tr>
          <tr>
            <td />
            <td>Pirmenybė</td>
            <td>Užvedimas</td>
            <td>Perdėlioti</td>
          </tr>
          <tr>
            <td>Mobilumas</td>
            <td>
              <input
                type="number"
                id="MP"
                value={MP}
                onChange={(e) => setMP(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                name="ME"
                id="ME"
                value={ME}
                onChange={(e) => setME(e.target.value)}
              />
            </td>
            <td>{Reposition}</td>
          </tr>
          <tr>
            <td />
            <td>Pirmenybė</td>
            <td>Gynybinis</td>
            <td>Agresyvus</td>
          </tr>
          <tr>
            <td>Naudingumas</td>
            <td>
              <input
                type="number"
                id="UP"
                value={UP}
                onChange={(e) => setUP(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                name="UD"
                id="UD"
                value={UD}
                onChange={(e) => setUD(e.target.value)}
              />
            </td>
            <td>{Offensive}</td>
          </tr>
          <tr>
            <td />
            <td>Pirmenybė</td>
            <td>Puolimas</td>
            <td>Gebėjimai</td>
          </tr>
          <tr>
            <td>Diapazonas</td>
            <td>
              <input
                type="number"
                id="RP"
                value={RP}
                onChange={(e) => setRP(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                name="RA"
                id="RA"
                value={RA}
                onChange={(e) => setRA(e.target.value)}
              />
            </td>
            <td>{Abilities}</td>
          </tr>
        </tbody>
      </table>

      <table border={1} className="inlineTable" id="table2">
        <tbody>
          <tr>
            <td />
            <td>Svertinis</td>
            <td>Žala</td>
            <td>Tvirtumas</td>
            <td>Minios valdymas</td>
            <td>Mobilumas</td>
            <td>Naudingumas</td>
            <td>Diapazonas</td>
          </tr>
          <tr className="Assassins">
            <td>Žudikai</td>
            <td id="Weighted1">{Weighted1}</td>
            <td>{AD}</td>
            <td>{AT}</td>
            <td>{ACC}</td>
            <td>{AM}</td>
            <td>{AU}</td>
            <td>{AR}</td>
          </tr>
          <tr className="Skirmishers">
            <td>Kovotojas</td>
            <td id="Weighted2">{Weighted2}</td>
            <td>{SD}</td>
            <td>{ST}</td>
            <td>{SCC}</td>
            <td>{SM}</td>
            <td>{SU}</td>
            <td>{SR}</td>
          </tr>
          <tr className="Divers">
            <td>Narai</td>
            <td id="Weighted3">{Weighted3}</td>
            <td>{DD}</td>
            <td>{DT}</td>
            <td>{DCC}</td>
            <td>{DM}</td>
            <td>{DU}</td>
            <td>{DR}</td>
          </tr>
          <tr className="Juggernauts">
            <td>Griaunamoji jėga</td>
            <td id="Weighted4">{Weighted4}</td>
            <td>{JD}</td>
            <td>{JT}</td>
            <td>{JCC}</td>
            <td>{JM}</td>
            <td>{JU}</td>
            <td>{JR}</td>
          </tr>
          <tr className="Vanguards">
            <td>Avangardai</td>
            <td id="Weighted5">{Weighted5}</td>
            <td>{VD}</td>
            <td>{VT}</td>
            <td>{VCC}</td>
            <td>{VM}</td>
            <td>{VU}</td>
            <td>{VR}</td>
          </tr>
          <tr className="Wardens">
            <td>Prižiūrėtojai</td>
            <td id="Weighted6">{Weighted6}</td>
            <td>{WD}</td>
            <td>{WT}</td>
            <td>{WCC}</td>
            <td>{WM}</td>
            <td>{WU}</td>
            <td>{WR}</td>
          </tr>
          <tr className="Catchers">
            <td>Gaudytojai</td>
            <td id="Weighted7">{Weighted7}</td>
            <td>{CD}</td>
            <td>{CT}</td>
            <td>{CCC}</td>
            <td>{CM}</td>
            <td>{CU}</td>
            <td>{CR}</td>
          </tr>
          <tr className="Enchanters">
            <td>Užkerėtojas</td>
            <td id="Weighted8">{Weighted8}</td>
            <td>{ED}</td>
            <td>{ET}</td>
            <td>{ECC}</td>
            <td>{EM}</td>
            <td>{EU}</td>
            <td>{ER}</td>
          </tr>
          <tr className="Artillery Mages">
            <td>Artilerijos magai</td>
            <td id="Weighted9">{Weighted9}</td>
            <td>{AMD}</td>
            <td>{AMT}</td>
            <td>{AMCC}</td>
            <td>{AMM}</td>
            <td>{AMU}</td>
            <td>{AMR}</td>
          </tr>
          <tr className="Burst Mages">
            <td>Spartieji magai</td>
            <td id="Weighted10">{Weighted10}</td>
            <td>{BMD}</td>
            <td>{BMT}</td>
            <td>{BMCC}</td>
            <td>{BMM}</td>
            <td>{BMU}</td>
            <td>{BMR}</td>
          </tr>
          <tr className="Battle Mages">
            <td>Mūšio magai</td>
            <td id="Weighted11">{Weighted11}</td>
            <td>{BAD}</td>
            <td>{BAT}</td>
            <td>{BACC}</td>
            <td>{BAM}</td>
            <td>{BAU}</td>
            <td>{BAR}</td>
          </tr>
          <tr className="Marksmen">
            <td>Šauliai</td>
            <td id="Weighted12">{Weighted12}</td>
            <td>{MD}</td>
            <td>{MT}</td>
            <td>{MCC}</td>
            <td>{MM}</td>
            <td>{MU}</td>
            <td>{MR}</td>
          </tr>
        </tbody>
      </table>
      <table className="answers" style={{ width: "50%" }}>
        <tbody>
          <tr>
            <th className="answers1">1:{First}</th>
          </tr>
          <tr>
            <th className="answers2">2:{Second}</th>
          </tr>
          <tr>
            <th className="answers3">3:{Third}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
