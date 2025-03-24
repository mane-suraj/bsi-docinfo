const refData = [
    { ptRef: "00952_10_01984", ptQiaRef: "00952_10_04180", ptResEntity: "EXPLEO", ptName: "F_AAST"},
    { ptRef: "00949_15_04798", ptQiaRef: "00949_15_04804", ptResEntity: "EXPLEO", ptName: "F_ACC" },
    { ptRef: "00949_15_04405", ptQiaRef: "00949_15_04400", ptResEntity: "EXPLEO", ptName: "F_ACPK" },
    { ptRef: "00952_09_04737", ptQiaRef: "00952_09_05364", ptResEntity: "EXPLEO", ptName: "F_ACTI" },
    { ptRef: "00952_09_05759", ptQiaRef: "00952_09_05760", ptResEntity: "EXPLEO", ptName: "F_AFIL" },
    { ptRef: "00949_15_03407", ptQiaRef: "00949_15_03412", ptResEntity: "EXPLEO", ptName: "F_AMVAR" },
    { ptRef: "00949_16_00088", ptQiaRef: "00949_15_05447", ptResEntity: "EXPLEO", ptName: "F_ANBC" },
    { ptRef: "00949_16_01107", ptQiaRef: "00952_09_05464", ptResEntity: "EXPLEO", ptName: "F_AQEB" },
    { ptRef: "01642_23_01657", ptQiaRef: "01642_23_01656", ptResEntity: "EXPLEO", ptName: "F_AQEB SW (SP5 V28)" },
    { ptRef: "00949_15_03337", ptQiaRef: "00949_15_03339", ptResEntity: "STELLANTIS", ptName: "F_ARMTH" },
    { ptRef: "01642_23_00886", ptQiaRef: "01642_23_01274", ptResEntity: "EXPLEO", ptName: "F_ANIMATION" },
    { ptRef: "01272_19_02148", ptQiaRef: "01272_19_02150", ptResEntity: "EXPLEO", ptName: "F_BIG_DATA_2010" },
    { ptRef: "00949_15_03328", ptQiaRef: "00949_15_03330", ptResEntity: "EXPLEO", ptName: "F_BV" },
    { ptRef: "01642_23_01028", ptQiaRef: "01642_23_01027", ptResEntity: "EXPLEO", ptName: "F_BV SW (SP5 V28)" },
    { ptRef: "00949_11_03732", ptQiaRef: "00949_11_03735", ptResEntity: "EXPLEO", ptName: "F_CMDM" },
    { ptRef: "01272_20_00072", ptQiaRef: "01272_20_00073", ptResEntity: "EXPLEO", ptName: "F_CODE_UCE" },
    { ptRef: "00952_09_05409", ptQiaRef: "00952_09_05774", ptResEntity: "EXPLEO", ptName: "F_CONFORT_THERMIQUE" },
    { ptRef: "01642_23_00827", ptQiaRef: "01642_23_00825", ptResEntity: "EXPLEO", ptName: "F_DAA4" },
    { ptRef: "01642_21_00841", ptQiaRef: "01642_21_00842", ptResEntity: "NA (PAS DE PT)", ptName: "F_DAA3" },
    { ptRef: "00952_10_00226", ptQiaRef: "00952_10_00234", ptResEntity: "EXPLEO", ptName: "F_DAGMP" },
    { ptRef: "00952_09_05402", ptQiaRef: "00952_09_05974", ptResEntity: "EXPLEO", ptName: "F_DEB" },
    { ptRef: "00949_15_00179", ptQiaRef: "00949_15_00181", ptResEntity: "EXPLEO", ptName: "F_DELESTAGE_TOURNANT" },
    { ptRef: "00949_15_03488", ptQiaRef: "00949_15_03489", ptResEntity: "EXPLEO", ptName: "F_DESPCR" },
    { ptRef: "00952_09_01918", ptQiaRef: "00952_09_05792", ptResEntity: "EXPLEO", ptName: "F_DIRA" },
    { ptRef: "00952_09_05795", ptQiaRef: "00952_09_05796", ptResEntity: "EXPLEO", ptName: "F_DOP" },
    { ptRef: "00952_10_04151", ptQiaRef: "00952_10_05957", ptResEntity: "EXPLEO", ptName: "F_DSGR" },
    { ptRef: "00949_16_02058", ptQiaRef: "00949_16_02059", ptResEntity: "EXPLEO", ptName: "F_DSV" },
    { ptRef: "00952_10_02392", ptQiaRef: "00952_10_02856", ptResEntity: "EXPLEO", ptName: "F_ECLI" },
    { ptRef: "01272_19_00182", ptQiaRef: "01272_19_00183", ptResEntity: "EXPLEO", ptName: "F_ECLX (SIGN)" },
    { ptRef: "01272_19_00289", ptQiaRef: "01272_19_00290", ptResEntity: "EXPLEO", ptName: "F_EDR" },
    { ptRef: "00949_15_03329", ptQiaRef: "00949_15_03331", ptResEntity: "EXPLEO", ptName: "F_EMOVE" },
    { ptRef: "00952_09_02145", ptQiaRef: "01272_20_00994", ptResEntity: "EXPLEO", ptName: "F_EOBD" },
    { ptRef: "00952_10_05014", ptQiaRef: "00952_10_00375", ptResEntity: "EXPLEO", ptName: "F_ESL" },
    { ptRef: "00952_09_04515", ptQiaRef: "00952_09_05751", ptResEntity: "EXPLEO", ptName: "F_ESP" },
    { ptRef: "00952_09_05953", ptQiaRef: "00952_09_05954", ptResEntity: "EXPLEO", ptName: "F_FAP" },
    { ptRef: "00952_09_05641", ptQiaRef: "00952_09_05879", ptResEntity: "EXPLEO", ptName: "F_FREINER" },
    { ptRef: "01272_20_01572", ptQiaRef: "01272_20_01571", ptResEntity: "EXPLEO", ptName: "F_GAV" },
    { ptRef: "00952_09_02758", ptQiaRef: "01272_18_01156", ptResEntity: "EXPLEO", ptName: "F_GCT" },
    { ptRef: "01642_23_01030", ptQiaRef: "01642_23_01029", ptResEntity: "EXPLEO", ptName: "F_GCT SW (SP5 V28)" },
    { ptRef: "00952_10_00039", ptQiaRef: "00952_10_00040", ptResEntity: "EXPLEO", ptName: "F_GSI" },
    { ptRef: "00949_14_03630", ptQiaRef: "00949_14_03631", ptResEntity: "EXPLEO", ptName: "F_HADC" },
    { ptRef: "00949_16_00063", ptQiaRef: "00949_16_00237", ptResEntity: "EXPLEO", ptName: "F_ILV" },
    { ptRef: "00952_09_04906", ptQiaRef: "00952_09_05698", ptResEntity: "EXPLEO", ptName: "F_INFOGMP" },
    { ptRef: "00949_16_01158", ptQiaRef: "00949_16_01159", ptResEntity: "EXPLEO", ptName: "F_IRC" },
    { ptRef: "00952_09_03893", ptQiaRef: "00952_09_05299", ptResEntity: "EXPLEO", ptName: "F_IVV (ODOMETRE)" },
    { ptRef: "00952_09_06160", ptQiaRef: "00952_09_06165", ptResEntity: "NA (PAS DE PT)", ptName: "F_INVIO (ADC)" },
    { ptRef: "00949_10_05038", ptQiaRef: "00952_09_06053", ptResEntity: "EXPLEO", ptName: "F_JGC" },
    { ptRef: "00949_14_03638", ptQiaRef: "00949_14_03639", ptResEntity: "NA (PAS DE PT)", ptName: "F_LKA (LxA)" },
    { ptRef: "00952_09_06067", ptQiaRef: "00952_09_06068", ptResEntity: "EXPLEO", ptName: "F_MAINTENANCE" },
    { ptRef: "00949_14_04647", ptQiaRef: "00952_09_05859", ptResEntity: "EXPLEO", ptName: "F_NIVEAU_HUILE" },
    { ptRef: "00952_09_02589", ptQiaRef: "00952_09_05780", ptResEntity: "EXPLEO", ptName: "F_ODB" },
    { ptRef: "00949_13_05034", ptQiaRef: "00949_13_02187", ptResEntity: "EXPLEO", ptName: "F_OFOLAT" },
    { ptRef: "01272_20_00207", ptQiaRef: "01272_20_00209", ptResEntity: "STELLANTIS", ptName: "F_OTA_UPDATE" },
    { ptRef: "00949_15_03334", ptQiaRef: "00949_15_03338", ptResEntity: "EXPLEO", ptName: "F_PARAM" },
    { ptRef: "00949_16_00023", ptQiaRef: "00949_16_00234", ptResEntity: "EXPLEO", ptName: "F_PHAB" },
    { ptRef: "00952_09_00951", ptQiaRef: "00952_09_05280", ptResEntity: "EXPLEO", ptName: "F_PHOT" },
    { ptRef: "00952_09_06088", ptQiaRef: "00952_10_02904", ptResEntity: "EXPLEO", ptName: "F_PICC" },
    { ptRef: "00952_09_04972", ptQiaRef: "00952_09_05924", ptResEntity: "EXPLEO", ptName: "F_REPAS_HAB" },
    { ptRef: "00952_09_02451", ptQiaRef: "00952_09_06093", ptResEntity: "EXPLEO", ptName: "F_REPAS_SC" },
    { ptRef: "01272_18_01243", ptQiaRef: "01272_18_01244", ptResEntity: "EXPLEO", ptName: "F_RTAB" },
    { ptRef: "00952_09_00704", ptQiaRef: "00952_09_06097", ptResEntity: "EXPLEO", ptName: "F_SAM" },
    { ptRef: "01272_19_01208", ptQiaRef: "01272_19_01209", ptResEntity: "EXPLEO", ptName: "F_SCR" },
    { ptRef: "00952_09_02097", ptQiaRef: "00952_09_05685", ptResEntity: "STELLANTIS", ptName: "F_TELEMATIQUE" },
    { ptRef: "00952_09_01699", ptQiaRef: "00952_09_06033", ptResEntity: "EXPLEO", ptName: "F_TEMPERATURE_HUILE" },
    { ptRef: "00949_12_05131", ptQiaRef: "00949_12_05133", ptResEntity: "EXPLEO", ptName: "F_TSC" },
    { ptRef: "00949_13_05530", ptQiaRef: "00949_13_05531", ptResEntity: "EXPLEO", ptName: "F_VTOR" },
    { ptRef: "00949_15_05294", ptQiaRef: "00949_15_05295", ptResEntity: "EXPLEO", ptName: "F_XVV" },
    { ptRef: "00949_13_05840", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ACVCC" },
    { ptRef: "00949_15_05510", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ACVCC (SIL_HIL)" },
    { ptRef: "00952_09_02160", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ADEC (HA)" },
    { ptRef: "00949_11_03684", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AGEE TBT" },
    { ptRef: "00952_09_03501", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AGEE_MOT" },
    { ptRef: "00949_14_05984", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AIRQ" },
    { ptRef: "00949_16_00126", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AIRQ_PURIF" },
    { ptRef: "00952_10_04165", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ARTIV 2010" },
    { ptRef: "00952_10_03359", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AUTO_DIAG" },
    { ptRef: "00949_15_04349", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AVN" },
    { ptRef: "00952_09_02605", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_AVR" },
    { ptRef: "00952_10_06149", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_BOOT_2010" },
    { ptRef: "00949_11_01276", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_BOOT_2010_ECO" },
    { ptRef: "00949_13_04880", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_BOOT_2010_EV" },
    { ptRef: "00952_10_01982", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_CAAR 2010" },
    { ptRef: "00952_10_00561", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_CCA" },
    { ptRef: "00949_11_03687", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_CGEPV" },
    { ptRef: "00949_11_02733", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_COLOR_NUM" },
    { ptRef: "00952_10_04402", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_CONFIG_VHL" },
    { ptRef: "00949_11_00446", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_COUCHE_RESEAU_DIAG" },
    { ptRef: "00949_15_04146", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_DAA_COCKPIT" },
    { ptRef: "00949_16_00914", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_DAA4" },
    { ptRef: "00949_11_01378", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_DAMGE" },
    { ptRef: "00952_09_05316", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_DCM" },
    { ptRef: "00952_09_05782", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_DPC" },
    { ptRef: "00952_09_01840", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_DSGNR" },
    { ptRef: "00949_16_05061", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ECLX_SIGN" },
    { ptRef: "00949_15_03218", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ECOCOACH" },
    { ptRef: "00949_12_03250", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_FARC_Urbain" },
    { ptRef: "00949_16_04107", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_GAV" },
    { ptRef: "00952_10_05196", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_GHD" },
    { ptRef: "00952_10_01561", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_HW_BSI_2010" },
    { ptRef: "00952_10_02705", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_HW_BSI_2010_ECO" },
    { ptRef: "00949_14_03113", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_IDEA_INSTRUM" },
    { ptRef: "00949_14_06207", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_IDEA_MP" },
    { ptRef: "00949_14_02987", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_IDEA_PCC" },
    { ptRef: "00949_12_06323", ptQiaRef: "", ptResEntity: "TBD", ptName: "F_LISTE ALERTES" },
    { ptRef: "00949_13_00809", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_MISE_EN_SERVICE" },
    { ptRef: "00952_09_02604", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_MPD" },
    { ptRef: "00949_10_05011", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_MROSU" },
    { ptRef: "00949_13_04829", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_NAV" },
    { ptRef: "00949_13_05126", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_OARM" },
    { ptRef: "00949_15_03517", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_OLVI" },
    { ptRef: "00952_09_04658", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_PASS_CAN_CAN" },
    { ptRef: "00952_09_03068", ptQiaRef: "", ptResEntity: "TBD", ptName: "F_PASS_CAN_LIN" },
    { ptRef: "00952_10_03384", ptQiaRef: "", ptResEntity: "TBD", ptName: "F_PASS_CANDIAG_LIN" },
    { ptRef: "00952_09_02636", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_PEE" },
    { ptRef: "00949_11_05135", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_PHASE_DE_VIE (PHV)" },
    { ptRef: "00952_10_05860", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_RCD" },
    { ptRef: "00949_15_02509", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_PLACE" },
    { ptRef: "00952_09_01511", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_PRESH" },
    { ptRef: "00949_12_04970", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_PTCA" },
    { ptRef: "00949_10_00328", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_SCPB" },
    { ptRef: "01272_20_01239", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_SCPB" },
    { ptRef: "00952_10_02893", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_SCR" },
    { ptRef: "00949_11_00466", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_Scrapping" },
    { ptRef: "00952_10_06515", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_SIGNALER" },
    { ptRef: "00952_09_06099", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_SOFT_MONTAGE" },
    { ptRef: "00952_09_04512", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_TELECODAGE_SECU" },
    { ptRef: "00949_13_04199", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_TLDIAG" },
    { ptRef: "00949_13_04672", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_TOV" },
    { ptRef: "00949_15_03511", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_VPARK (AVP)" }
];

const tabBody1 = $("#ptTabBody")

refData.forEach((item, index) =>{

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.ptName}</td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.ptRef}/v.vc/fiche">${item.ptRef}</a></td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.ptQiaRef}/v.vc/fiche">${item.ptQiaRef}</a></td>
    <td>${item.ptResEntity}</td>
    `;

    if(item.ptResEntity === "EXPLEO"){
        $(row).css("backgroundColor", "rgba(103, 27, 199, 0.5)");
    } else if (item.ptResEntity === "ALTEN"){
        $(row).css("backgroundColor", "yellow")
    }

    tabBody1.append(row);
});

const docRefData = [
    {docType: "GBL", docRef : "00949_11_00178", qiaRef : "01642_23_00140", docName: "PARAM GLOBAL"},
    {docType: "GBL", docRef : "02016_11_06093", qiaRef : "02016_16_04175", docName: "DCI GLOBAL"},
    {docType: "GBL", docRef : "00952_10_05276", qiaRef : "00952_09_01398", docName: "SOUS FICHE TESTPLAN (SSF)"},
    {docType: "GBL", docRef : "02016_11_04964", qiaRef : "01272_23_00190", docName: "EC REFERENTIEL"},
    {docType: "GBL", docRef : "AEEV_PROJ08_0046", qiaRef : "", docName: "STG CALIBRATION"},
    {docType: "GBL", docRef : "01255_08_00390", qiaRef : "01255_10_01507", docName: "SI ALERT"},
    {docType: "GBL", docRef : "00952_09_03212", qiaRef : "", docName: "FLUX MESSAGERIE"},
    {docType: "GBL", docRef : "00949_16_01952", qiaRef : "00949_16_03918", docName: "SYNTHESE ARCHI"},
    {docType: "GBL", docRef : "00952_09_05196", qiaRef : "01272_23_00190", docName: "CONFIG THEMATIQUES"},
    {docType: "GBL", docRef : "AEEV_AESV07_1573", qiaRef : "", docName: "ST DDD"},
    {docType: "GBL", docRef : "966527219A", qiaRef : "", docName: "DIAG MESSAGERIE"},
    {docType: "GBL", docRef : "01272_18_00107", qiaRef : "", docName: "BSI REPARTITION FUNCTIONS SP"},
    {docType: "GBL", docRef : "01642_23_01424", qiaRef : "", docName: "BSI DELIVERY MAIL TEMPLATES"},
    {docType: "INT", docRef : "01272_19_02283", qiaRef : "", docName: "ANALYSE DE ENTRANT"},
    {docType: "UG", docRef : "00949_17_03714", qiaRef : "", docName: "FUNCTION DESCRIPTION DOCS"},
    {docType: "UG", docRef : "01642_20_01130", qiaRef : "01642_22_00831", docName: "AUTOMATION GUIDELINE (QIA - RETEX)"},
    {docType: "UG", docRef : "01272_24_00105", qiaRef : "", docName: "SOUND GUIDE"},
    {docType: "UG", docRef : "01272_21_01458", qiaRef : "", docName: "TEMPO/TMIN/TMAX GUIDE"},
    {docType: "UG", docRef : "01272_22_00098", qiaRef : "", docName: "EC FORMATION/USABILTY GUIDE"},
    {docType: "UG", docRef : "01272_20_02558", qiaRef : "", docName: "ALTIS/FAPI CREATION GUIDE"},
    {docType: "UG", docRef : "01642_23_01262", qiaRef : "", docName: "DTC GUIDE"},
    {docType: "UG", docRef : "01642_24_00583", qiaRef : "", docName: "RAMPE AUTO EXECUTION GUIDE"},
    {docType: "UG", docRef : "01642_23_00277", qiaRef : "", docName: "F_GAV TUTO (VALIDATION)"},
    {docType: "UG", docRef : "00952_09_00540", qiaRef : "", docName: "TEST BOOK WRITING GUIDE"},
    {docType: "UG", docRef : "00949_15_04095", qiaRef : "", docName: "MANU PT COMPILATION GUIDE"},
    {docType: "CKL", docRef : "01642_23_00433", qiaRef : "", docName: "AUTOMATION REVIEW CHECKLIST"},
    {docType: "CKL", docRef : "01642_22_00865", qiaRef : "", docName: "AUTO PC REVIEW CHECKLIST"},
    {docType: "CKL", docRef : "01642_22_01347", qiaRef : "", docName: "MANUAL PC REVIEW CHECKLIST"},
    {docType: "CKL", docRef : "01642_21_00222", qiaRef : "", docName: "DC REVIEW CHECKLIST"},
    {docType: "TL", docRef : "01272_18_00034", qiaRef : "01272_18_01027", docName: "VSVB MACRO"},
    {docType: "TL", docRef : "01642_24_00721", qiaRef : "", docName: "HIK PT COMPILER"},
    {docType: "TL", docRef : "01642_24_00588", qiaRef : "", docName: "PARAM COMPILER"},
    {docType: "TL", docRef : "", qiaRef : "01642_20_01301", docName: "QIA BENCH"},
    {docType: "PRC", docRef : "01642_22_01201", qiaRef : "", docName: "AUTO GLOBAL PROCESS"},
    {docType: "SSD", docRef : "02017_19_02196", qiaRef : "02017_19_02218", docName: "HMIF LONGITUDINAL_MOBILITY_MOBY_HMI (MOBY_HMI)"},
    {docType: "SSD", docRef : "02017_19_02184", qiaRef : "02017_19_02228", docName: "HMIF ACTIVE_SAFETY_DANGER_ALERT_HMI (ASDA_HMI)"},
    {docType: "SSD", docRef : "02017_19_02189", qiaRef : "02017_19_02224", docName: "HMIF COCKPIT_HANDLING_HMI (COHG_HMI)"},
    {docType: "SSD", docRef : "02017_19_02195", qiaRef : "02017_19_02219", docName: "HMIF ENERGY_HMI (NRG_HMI)"},
    {docType: "SSD", docRef : "02017_19_02186", qiaRef : "02017_19_02227", docName: "HMIF DRIVING_ASSISTANCE_HMI (DRAS_HMI)"},
    {docType: "SSD", docRef : "02017_19_02198", qiaRef : "02017_19_02216", docName: "HMIF ELECTRIC_VEHICLE_HMI (XEV_HMI)"},
    {docType: "SSD", docRef : "02017_19_02405", qiaRef : "02017_19_02408", docName: "HMIF CABIN_LIGHTING_DIMMING_HMI (CBLT_HMI)"},
    {docType: "SSD", docRef : "02017_19_02191", qiaRef : "02017_19_02222", docName: "HMIF ACCES_START_SECURITY_HMI (ASS_HMI)"},
    {docType: "SSD", docRef : "02017_19_02197", qiaRef : "02017_19_02217", docName: "HMIF GROUND_LINK_HMI (GDLK_HMI)"},
    {docType: "SSD", docRef : "02017_19_02190", qiaRef : "02017_19_02223", docName: "HMIF CABIN_COMFORT_HMI (CMFT_HMI)"},
    {docType: "SSD", docRef : "02017_19_02188", qiaRef : "02017_19_02225", docName: "HMIF PERCEIVE_BE_PERCEIVED_HMI (PERC_HMI)"},
    {docType: "SSD", docRef : "02017_19_02187", qiaRef : "02017_19_02226", docName: "HMIF PARKING_ASSISTANCE_HMI (PARK_HMI)"},
    {docType: "SSD", docRef : "02017_19_02193", qiaRef : "02017_19_02220", docName: "HMIF INFOTAINMENT_HMI_24Q4 (INFT_HMI)"},
    {docType: "SSD", docRef : "01843_20_00500", qiaRef : "01843_20_00502", docName: "HMIF DISPLAY_MANAGEMENT_HMI (DIMA_HMI)"},
    {docType: "SSD", docRef : "02017_19_02192", qiaRef : "02017_19_02221", docName: "HMIF MAINTENANCE_RECORDING_HMI (MREC_HMI)"},
    {docType: "SSD", docRef : "02017_19_02213", qiaRef : "02017_19_02215", docName: "HMIF OFF_BOARD_CONNECTIVITY_HMI (OFBC_HMI)"},
    {docType: "SSD", docRef : "02014_19_00590", qiaRef : "00998_17_04026", docName: "GEN1_RSP_CVMM_CONTROL_VHL_MISSION_MODES (SSFD)"},
    {docType: "SSD", docRef : "02014_19_00574", qiaRef : "02014_19_00552", docName: "GEN1_RSP_MTSR_MANAGE_TIME_AND_SCHEDULED_REQUESTS (SSFD)"},
    {docType: "SSD", docRef : "02014_19_00542", qiaRef : "02014_19_00643", docName: "GEN1_RSP_SRM_SUPERVISE_RECONFIGURATION_AND_MAINTENANCE (SSFD)"},
    {docType: "SSD", docRef : "02014_21_00779", qiaRef : "02014_22_00006", docName: "GEN1_SSVS_AER_ARBITRATE_ENERGETIC_REQUESTS (SSFD)"},
    {docType: "SSD", docRef : "02014_19_00780", qiaRef : "02014_19_00782", docName: "GEN1_RSP_DVS_DETERMINATE_VEHICLE_STATE (SSFD)"},
    {docType: "SSD", docRef : "00998_18_03912", qiaRef : "02014_20_00378", docName: "GEN1_RSP_LIA_LOCATE_IDENTIFY_AUTHENTICATE_THE_USER (SSFD)"},
    {docType: "SSD", docRef : "02014_19_00792", qiaRef : "02014_19_00794", docName: "GENx_RSP_AUE_ALERT_UNALLOWED_EVENTS (SSFD)"},
    {docType: "SSD", docRef : "00998_17_02659", qiaRef : "02014_19_00896", docName: "GENx_RSP_MDL_MANAGE_DEFECT_LOG (SSFD)"},
    {docType: "SSD", docRef : "02014_19_00535", qiaRef : "02014_19_00579", docName: "GENx_RSP_MERP_MANAGE_ELECTRIC_RELOAD_PHASE (SSFD)"},
    {docType: "QIA", docRef : "", qiaRef : "01407_20_03654", docName: "QIA SSD CABIN THERMAL"},
    {docType: "SUVI", docRef : "01272_20_02108", qiaRef : "", docName: "HED SUIVI"},
    {docType: "SUVI", docRef : "01642_22_00433", qiaRef : "", docName: "SCHA SUIVI"},
    {docType: "GBL", docRef : "01272_20_02392", qiaRef : "", docName: "WKPI"}
];

const tabBody2 = $("#gbDocTabBody");

docRefData.forEach((item, index) =>{

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${item.docType}
    <td>${item.docName}</td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.docRef}/v.vc/fiche">${item.docRef}</a></td>
    <td><a href="http://docinfogroupe.inetpsa.com/ead/doc/ref.${item.qiaRef}/v.vc/fiche">${item.qiaRef}</a></td>
    `;

    if(item.docType === "SSD" || item.docType === "SSFD"){
        row.classList.add('ExtraStyling');
    }
    
    tabBody2.append(row);

    });


document.addEventListener('DOMContentLoaded', function() {
    const ptFilterInput = document.getElementById('ptRefFilter'), docFilterInput = document.getElementById('docRefFilter');
    const ptTable = document.getElementById('ptTable'), docTable = document.getElementById('docTable');
    const tbodyPT = ptTable.getElementsByTagName('tbody')[0], tbodyDOC = docTable.getElementsByTagName('tbody')[0];
    const ptRows = tbodyPT.getElementsByTagName('tr'), docRows = tbodyDOC.getElementsByTagName('tr');

    ptFilterInput.addEventListener('keyup', function() {
        const filter = ptFilterInput.value.toLowerCase();
        for (let i = 0; i < ptRows.length; i++) {
            let shouldDisplay = false;
            const cells = ptRows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                    shouldDisplay = true;
                    break;
                }
            }
            ptRows[i].style.display = shouldDisplay ? '' : 'none';
        }
    });

    docFilterInput.addEventListener('keyup', function() {
        const filter = docFilterInput.value.toLowerCase();
        for (let i = 0; i < docRows.length; i++) {
            let shouldDisplay = false;
            const cells = docRows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                    shouldDisplay = true;
                    break;
                }
            }
            docRows[i].style.display = shouldDisplay ? '' : 'none';
        }
    });
});
