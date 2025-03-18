const refData = [
    { ptRef: "00952_10_01984", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_AAST"},
    { ptRef: "00949_15_04798", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ACC" },
    { ptRef: "00949_15_04405", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ACPK" },
    { ptRef: "00952_09_04737", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ACTI" },
    { ptRef: "00952_09_05759", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_AFIL" },
    { ptRef: "00949_15_03407", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_AMVAR" },
    { ptRef: "00949_16_00088", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ANBC" },
    { ptRef: "00949_16_01107", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_AQEB" },
    { ptRef: "01642_23_01657", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_AQEB SW (SP5 V28)" },
    { ptRef: "00949_15_03337", ptQiaRef: "", ptResEntity: "STELLANTIS", ptName: "F_ARMTH" },
    { ptRef: "01642_23_00886", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ANIMATION" },
    { ptRef: "01272_19_02148", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_BIG_DATA_2010" },
    { ptRef: "00949_15_03328", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_BV" },
    { ptRef: "01642_23_01028", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_BV SW (SP5 V28)" },
    { ptRef: "00949_11_03732", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_CMDM" },
    { ptRef: "01272_20_00072", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_CODE_UCE" },
    { ptRef: "00952_09_05409", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_CONFORT_THERMIQUE" },
    { ptRef: "01642_23_00827", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DAA4" },
    { ptRef: "01642_21_00841", ptQiaRef: "", ptResEntity: "NA (PAS DE PT)", ptName: "F_DAA3" },
    { ptRef: "00952_10_00226", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DAGMP" },
    { ptRef: "00952_09_05402", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DEB" },
    { ptRef: "00949_15_00179", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DELESTAGE_TOURNANT" },
    { ptRef: "00949_15_03488", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DESPCR" },
    { ptRef: "00952_09_01918", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DIRA" },
    { ptRef: "00952_09_05795", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DOP" },
    { ptRef: "00952_10_04151", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DSGR" },
    { ptRef: "00949_16_02058", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_DSV" },
    { ptRef: "00952_10_02392", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ECLI" },
    { ptRef: "01272_19_00182", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ECLX" },
    { ptRef: "01272_19_00289", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_EDR" },
    { ptRef: "00949_15_03329", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_EMOVE" },
    { ptRef: "00952_09_02145", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_EOBD" },
    { ptRef: "00952_10_05014", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ESL" },
    { ptRef: "00952_09_04515", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ESP" },
    { ptRef: "00952_09_05953", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_FAP" },
    { ptRef: "00952_09_05641", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_FREINER" },
    { ptRef: "01272_20_01572", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_GAV" },
    { ptRef: "00952_09_02758", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_GCT" },
    { ptRef: "01642_23_01030", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_GCT SW (SP5 V28)" },
    { ptRef: "00952_10_00039", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_GSI" },
    { ptRef: "00949_14_03630", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_HADC" },
    { ptRef: "00949_16_00063", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ILV" },
    { ptRef: "00952_09_04906", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_INFOGMP" },
    { ptRef: "00949_16_01158", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_IRC" },
    { ptRef: "00952_09_03893", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_IVV (ODOMETRE)" },
    { ptRef: "00952_09_06160", ptQiaRef: "", ptResEntity: "NA (PAS DE PT)", ptName: "F_INVIO" },
    { ptRef: "00949_10_05038", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_JGC" },
    { ptRef: "00949_14_03638", ptQiaRef: "", ptResEntity: "NA (PAS DE PT)", ptName: "F_LxA" },
    { ptRef: "00952_09_06067", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_MAINTENANCE" },
    { ptRef: "00949_14_04647", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_NIVEAU_HUILE" },
    { ptRef: "00952_09_02589", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_ODB" },
    { ptRef: "00949_13_05034", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_OFOLAT" },
    { ptRef: "01272_20_00207", ptQiaRef: "", ptResEntity: "STELLANTIS", ptName: "F_OTA_UPDATE" },
    { ptRef: "00949_15_03334", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_PARAM" },
    { ptRef: "00949_16_00023", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_PHAB" },
    { ptRef: "00952_09_00951", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_PHOT" },
    { ptRef: "00952_09_06088", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_PICC" },
    { ptRef: "00952_09_04972", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_REPAS_HAB" },
    { ptRef: "00952_09_02451", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_REPAS_SC" },
    { ptRef: "01272_18_01243", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_RTAB" },
    { ptRef: "00952_09_00704", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_SAM" },
    { ptRef: "01272_19_01208", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_SCR" },
    { ptRef: "00952_09_02097", ptQiaRef: "", ptResEntity: "STELLANTIS", ptName: "F_TELEMATIQUE" },
    { ptRef: "00952_09_01699", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_TEMPERATURE_HUILE" },
    { ptRef: "00949_12_05131", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_TSC" },
    { ptRef: "00949_13_05530", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_VTOR" },
    { ptRef: "00949_15_05294", ptQiaRef: "", ptResEntity: "EXPLEO", ptName: "F_XVV" },
    { ptRef: "00949_13_05840", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ACVCC" },
    { ptRef: "00949_15_05510", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ACVCC (SIL_HIL)" },
    { ptRef: "00952_09_06160", ptQiaRef: "", ptResEntity: "TBC", ptName: "F_ADC" },
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
    {docType: "GBL", docRef : "00949_11_00178", qiaRef : "01642_23_00140", docName: "Param Global"},
    {docType: "GBL", docRef : "02016_11_06093", qiaRef : "",               docName: "DCI Global"},
    {docType: "GBL", docRef : "02016_11_04964", qiaRef : "01272_23_00190", docName: "EC Referentiel"},
    {docType: "GBL", docRef : "00952_10_05276", qiaRef : "00952_09_01398", docName: "Sous Fiche Testplan (SSF)"},
    {docType: "GBL", docRef : "00952_09_05196", qiaRef : "01272_23_00190", docName: "Config Thematiques"},
    {docType: "GBL", docRef : "AEEV_PROJ08_0046", qiaRef : "",             docName: "STG Calibration"},
    {docType: "GBL", docRef : "00952_09_03212", qiaRef : "",               docName: "FLUX MESSAGERIE"},
    {docType: "GBL", docRef : "AEEV_AESV07_1573", qiaRef : "",             docName: "ST DDD"},

    {docType: "GBL", docName: "SYNTHESE ARCHI", docRef : "00949_16_01952", qiaRef : "00949_16_03918"},
    {docType: "GBL", docName: "DIAG MESSAGERIE", docRef : "966527219A", qiaRef : ""},
    {docType: "GBL", docName: "SI Alert", docRef : "01255_08_00390", qiaRef : "01255_10_01507"},
    {docType: "GBL", docName: "WKPI", docRef : "01272_20_02392", qiaRef : ""},
    {docType: "GBL", docName: " Test Book Writing Guide", docRef : "00952_09_00540", qiaRef : ""},
    {docType: "INT", docName: "Analyse de Entrant", docRef : "01272_19_02283", qiaRef : ""},
    {docType: "CKL", docName: "Checklist DC Review BSI", docRef : "01642_21_00222", qiaRef : ""},
    {docType: "TL", docName: "Macro Updation", docRef : "01272_18_00034", qiaRef : ""},
    {docType: "SUVI", docName: "HED SUIIVI", docRef : "01272_20_02108", qiaRef : ""},
    {docType: "GBL", docRef : "01272_18_00107", qiaRef : "",               docName: "BSI Repartition Fonctions SP"},

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