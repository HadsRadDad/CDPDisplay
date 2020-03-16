$(document).ready(function () {
	$('button').each(function (index, value) {
		$(`#${this.id}`).click(function () {
			$('#classinfo').load(`../courseinfo/${this.id}.txt`);
		});
	});
});
//JIC
// $("#ARIO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ARIO.txt");
// });

// $("#ASTTP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ASTTP.txt");
// });

// $("#BPAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/BPAC.txt");
// });

// $("#BTM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/BTM.txt");
// });

// $("#BMAP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/BMAP.txt");
// });

// $("#CSM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/CSM.txt");
// });

// $("#EHTER").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/EHTER.txt");
// });

// $("#EMO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/EMO.txt");
// });

// $("#EMRA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/EMRA.txt");
// });

// $("#ERDB").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ERDB.txt");
// });

// $("#ERHM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ERHM.txt");
// });

// $("#FFC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/FFC.txt");
// });

// $("#FFCE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/FFCE.txt");
// });

// $("#FFE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/FFE.txt");
// });

// $("#FFO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/FFO.txt");
// });

// $("#FRAME").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/FRAME.txt");
// });

// $("#HMO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HMO.txt");
// });

// $("#HCL").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HCL.txt");
// });

// $("#HCRL").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HCRL.txt");
// });

// $("#HEC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HEC.txt");
// });

// $("#HERO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HERO.txt");
// });

// $("#HERT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HERT.txt");
// });

// $("#HERTBTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HERTBTTT.txt");
// });

// $("#HID").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HID.txt");
// });

// $("#HMT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HMT.txt");
// });

// $("#HMBR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HMBR.txt");
// });

// $("#HOT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HOT.txt");
// });

// $("#HOTI").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HOTI.txt");
// });

// $("#HOTLE").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HOTLE.txt");
// });

// $("#HT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HT.txt");
// });

// $("#IC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/IC.txt");
// });

// $("#ICR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ICR.txt");
// });

// $("#IED").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/IED.txt");
// });

// $("#ILERSBA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ILERSBA.txt");
// });

// $("#ITC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/ITC.txt");
// });

// $("#LEPM").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/LEPM.txt");
// });

// $("#LEPMTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/LEPMTTT.txt");
// });

// $("#LERA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/LERA.txt");
// });

// $("#PODET").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/PODET.txt");
// });

// $("#MPI").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/MPI.txt");
// });

// $("#PMC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/PMC.txt");
// });

// $("#PPMB").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/PPMB.txt");
// });

// $("#PPMBTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/PPMBTTT.txt");
// });

// $("#RAAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RAAC.txt");
// });

// $("#RADTTT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RADTTT.txt");
// });

// $("#RCCC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RCCC.txt");
// });

// $("#RDIR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RDIR.txt");
// });

// $("#RECC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RECC.txt");
// });

// $("#REEC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/REEC.txt");
// });

// $("#RERO").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RERO.txt");
// });

// $("#RP").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RP.txt");
// });

// $("#RPCC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RPCC.txt");
// });

// $("#RCTIC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RCTIC.txt");
// });

// $("#RPPR").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/RPPR.txt");
// });

// $("#SAAC").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/SAAC.txt");
// });

// $("#SAAT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/SAAT.txt");
// });

// $("#SAT").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/SAT.txt");
// });

// $("#SNS").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/SNS.txt");
// });

// $("#HMA").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/HMA.txt");
// });

// $("#VBIED").click(function(){
//     $("#classinfo").load("https://hadsraddad.github.io/CDPDisplay/courseinfo/VBIED.txt");
// });
