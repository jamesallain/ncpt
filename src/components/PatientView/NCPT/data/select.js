const STATUS = [
  {
    "Key": 1,
    "Status": "New"   
  },
  {
    "Key": 2,
    "Status": "Continued"   
  },
  {
    "Key": 3,
    "Status": "Resolved"   
  },
  {
    "Key": 4,
    "Status": "Removed"   
  }
]


const STANDARD = [
  {
    "Key": 1,
    "Status": "High / above goal"   
  },
  {
    "Key": 2,
    "Status": "Normal / at goal"   
  },
  {
    "Key": 3,
    "Status": "Low / below goal"   
  }
]




const DOMAIN = [
  {
    "id": 1,
    "name": "Assessment",
    "headers": ["NCPT Term", "Value", "Units/Indicators", "Evaluation/Standard"],
    "control": [{"id": 1,
                 "header": "NCPT Term",
                 "type": "select",
                 "data": "ncpt",
                 "parent": 0,
                 "display": "inline"
                },
                {"id": 2,
                 "header": "Value",
                 "type": "input",
                 "data": "none",
                 "parent": 0,
                 "display": "inline"
                },
                {"id": 3,
                 "header": "Units/Indicators",
                 "type": "select",
                 "data": "units",
                 "parent": 1.1,
                 "display": "inline"
                },
                {"id": 4,
                 "header": "Evaluation/Standard",
                 "type": "select",
                 "data": "standards",
                 "parent": 0,
                 "display": "inline"
                }]

  },
  {
    "id": 2,
    "name": "Diagnosis",
    "headers": ["Problem", "Etiologies", "Signs/Symptoms", "Diagnosis Status"],
    "control":  [{"id": 1,
                 "header": "Problem",
                 "type": "select",
                 "data": "ncpt",
                 "parent": 1.1,
                 "display": "inline"
                },
                {"id": 2,
                 "header": "Etiologies",
                 "type": "checkbox",
                 "data": "ncpt",
                 "parent": 2.1,            
                 "display": "inline"
                },
                {"id": 3,
                 "header": "Signs/Symptoms",
                 "type": "checkbox",
                 "data": "ncpt",
                 "parent": 2.1,             
                 "display": "inline"
                },
                {"id": 4,
                 "header": "Diagnosis Status",
                 "type": "select",
                 "data": "standards",
                 "parent": 0,
                 "display": "inline"
                }]

  },
  {
    "id": 3,
    "name": "Intervention",
    "headers": ["Target Etiology", "Interventions", "", ""],
    "control":  [{"id": 1,
                 "header": "Target Etiology",
                 "type": "list",
                 "data": "ncpt",
                 "parent": 2.3,
                 "display": "inline"
                },
                {"id": 2,
                 "header": "Interventions",
                 "type": "input",
                 "data": "none",
                 "parent": 0,
                 "display": "inline"
                },
                {"id": 3,
                 "header": "Details",
                 "type": "select",
                 "data": "user_stored",
                 "parent": 0,
                 "display": "inline"
                },
                {"id": 4,
                 "header": "",
                 "type": "",
                 "data": "",
                 "parent": 0,
                 "display": "none"
                }]

  },
   {
    "id": 4,
    "name": "Monitoring & Assessment",
    "headers": ["Diagnosis", "Monitors", "", ""],
    "control":   [{"id": 1,
                 "header": "NCPT Term",
                 "type": "list",
                 "data": "ncpt",
                 "parent": 2.1,
                 "display": "inline"
                },
                {"id": 2,
                 "header": "Value",
                 "type": "select",
                 "data": "ncpt",
                 "parent": 0,
                 "display": "inline"
                },
                {"id": 3,
                 "header": "Units/Indicators",
                 "type": "select",
                 "data": "units",
                 "parent": 0,
                 "display": "inline"
                },
                {"id": 4,
                 "header": "Evaluation/Standard",
                 "type": "select",
                 "data": "standards",
                 "parent": 0,
                 "display": "inline"
                }]
  }
]