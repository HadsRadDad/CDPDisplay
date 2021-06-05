$(document).ready(function () {
  $("button").each(function (index, value) {
    $(`#${this.id}`).click(function () {
      $("#classinfo").load(`../courseinfo/${this.id}.txt`);
    });
  });
});

//JIC
// $("#ARIO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ARIO.txt");
// });

// $("#ASTTP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ASTTP.txt");
// });

// $("#BPAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/BPAC.txt");
// });

// $("#BTM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/BTM.txt");
// });

// $("#BMAP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/BMAP.txt");
// });

// $("#CSM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/CSM.txt");
// });

// $("#EHTER").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/EHTER.txt");
// });

// $("#EMO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/EMO.txt");
// });

// $("#EMRA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/EMRA.txt");
// });

// $("#ERDB").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ERDB.txt");
// });

// $("#ERHM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ERHM.txt");
// });

// $("#FFC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/FFC.txt");
// });

// $("#FFCE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/FFCE.txt");
// });

// $("#FFE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/FFE.txt");
// });

// $("#FFO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/FFO.txt");
// });

// $("#FRAME").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/FRAME.txt");
// });

// $("#HMO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HMO.txt");
// });

// $("#HCL").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HCL.txt");
// });

// $("#HCRL").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HCRL.txt");
// });

// $("#HEC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HEC.txt");
// });

// $("#HERO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HERO.txt");
// });

// $("#HERT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HERT.txt");
// });

// $("#HERTBTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HERTBTTT.txt");
// });

// $("#HID").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HID.txt");
// });

// $("#HMT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HMT.txt");
// });

// $("#HMBR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HMBR.txt");
// });

// $("#HOT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HOT.txt");
// });

// $("#HOTI").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HOTI.txt");
// });

// $("#HOTLE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HOTLE.txt");
// });

// $("#HT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HT.txt");
// });

// $("#IC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/IC.txt");
// });

// $("#ICR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ICR.txt");
// });

// $("#IED").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/IED.txt");
// });

// $("#ILERSBA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ILERSBA.txt");
// });

// $("#ITC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/ITC.txt");
// });

// $("#LEPM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/LEPM.txt");
// });

// $("#LEPMTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/LEPMTTT.txt");
// });

// $("#LERA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/LERA.txt");
// });

// $("#PODET").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/PODET.txt");
// });

// $("#MPI").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/MPI.txt");
// });

// $("#PMC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/PMC.txt");
// });

// $("#PPMB").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/PPMB.txt");
// });

// $("#PPMBTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/PPMBTTT.txt");
// });

// $("#RAAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RAAC.txt");
// });

// $("#RADTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RADTTT.txt");
// });

// $("#RCCC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RCCC.txt");
// });

// $("#RDIR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RDIR.txt");
// });

// $("#RECC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RECC.txt");
// });

// $("#REEC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/REEC.txt");
// });

// $("#RERO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RERO.txt");
// });

// $("#RP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RP.txt");
// });

// $("#RPCC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RPCC.txt");
// });

// $("#RCTIC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RCTIC.txt");
// });

// $("#RPPR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/RPPR.txt");
// });

// $("#SAAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/SAAC.txt");
// });

// $("#SAAT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/SAAT.txt");
// });

// $("#SAT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/SAT.txt");
// });

// $("#SNS").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/SNS.txt");
// });

// $("#HMA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/HMA.txt");
// });

// $("#VBIED").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDP_Mobile_Display_App/courseinfo/VBIED.txt");
// });
