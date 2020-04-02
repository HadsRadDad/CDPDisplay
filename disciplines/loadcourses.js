$(document).ready(function () {
	$('button').each(function (index, value) {
		$(`#${this.id}`).click(function () {
			$('#classinfo').load(`../courseinfo/${this.id}.txt`);
		});
	});
});

//JIC
// $("#ARIO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ARIO.txt");
// });

// $("#ASTTP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ASTTP.txt");
// });

// $("#BPAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/BPAC.txt");
// });

// $("#BTM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/BTM.txt");
// });

// $("#BMAP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/BMAP.txt");
// });

// $("#CSM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/CSM.txt");
// });

// $("#EHTER").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/EHTER.txt");
// });

// $("#EMO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/EMO.txt");
// });

// $("#EMRA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/EMRA.txt");
// });

// $("#ERDB").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ERDB.txt");
// });

// $("#ERHM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ERHM.txt");
// });

// $("#FFC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/FFC.txt");
// });

// $("#FFCE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/FFCE.txt");
// });

// $("#FFE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/FFE.txt");
// });

// $("#FFO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/FFO.txt");
// });

// $("#FRAME").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/FRAME.txt");
// });

// $("#HMO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HMO.txt");
// });

// $("#HCL").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HCL.txt");
// });

// $("#HCRL").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HCRL.txt");
// });

// $("#HEC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HEC.txt");
// });

// $("#HERO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HERO.txt");
// });

// $("#HERT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HERT.txt");
// });

// $("#HERTBTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HERTBTTT.txt");
// });

// $("#HID").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HID.txt");
// });

// $("#HMT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HMT.txt");
// });

// $("#HMBR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HMBR.txt");
// });

// $("#HOT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HOT.txt");
// });

// $("#HOTI").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HOTI.txt");
// });

// $("#HOTLE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HOTLE.txt");
// });

// $("#HT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HT.txt");
// });

// $("#IC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/IC.txt");
// });

// $("#ICR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ICR.txt");
// });

// $("#IED").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/IED.txt");
// });

// $("#ILERSBA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ILERSBA.txt");
// });

// $("#ITC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/ITC.txt");
// });

// $("#LEPM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/LEPM.txt");
// });

// $("#LEPMTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/LEPMTTT.txt");
// });

// $("#LERA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/LERA.txt");
// });

// $("#PODET").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/PODET.txt");
// });

// $("#MPI").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/MPI.txt");
// });

// $("#PMC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/PMC.txt");
// });

// $("#PPMB").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/PPMB.txt");
// });

// $("#PPMBTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/PPMBTTT.txt");
// });

// $("#RAAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RAAC.txt");
// });

// $("#RADTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RADTTT.txt");
// });

// $("#RCCC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RCCC.txt");
// });

// $("#RDIR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RDIR.txt");
// });

// $("#RECC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RECC.txt");
// });

// $("#REEC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/REEC.txt");
// });

// $("#RERO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RERO.txt");
// });

// $("#RP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RP.txt");
// });

// $("#RPCC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RPCC.txt");
// });

// $("#RCTIC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RCTIC.txt");
// });

// $("#RPPR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/RPPR.txt");
// });

// $("#SAAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/SAAC.txt");
// });

// $("#SAAT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/SAAT.txt");
// });

// $("#SAT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/SAT.txt");
// });

// $("#SNS").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/SNS.txt");
// });

// $("#HMA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/HMA.txt");
// });

// $("#VBIED").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPMoblieDisplayApp/courseinfo/VBIED.txt");
// });
