import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import {useMediaQuery} from "@mui/material";

export const infoStyle = {
    margin: "10px",
    marginRight: "80px",
    width: 200,
    display: "flex",
    alignItems: "flex-start",

    signature:{
      fontSize: "26px",
        margin: "10px",
        color: "#888",
        width: 700,
        fontWeight: "bold",
        // alignSelf: "center"
        // fontFamily: "Arial",
    },
    avatar:{
        width: '240px',
        height: '240px',
        color: "white",
        border: "4px solid #ccc",
        padding: "6px",
    },
    sign: {
      fontSize: "15px",
        // width: 100,
    },
    info: {
        // fontFamily: 'Arial',
        display: 'flex',
        alignItems: "center",
        margin: "2px",
        text: {
            color: '#444',
            fontSize: '17px',
            margin: '2px',
        },
        icon: {
            fontSize: '18px',
            color: '#444',
        }
    },
    about: {
        color: '#333',
        // fontFamily: 'Arial',
        fontSize: '18px',
        display: 'flex',
        marginLeft: '0px',
        marginTop: '-10px',
        alignItems: "center",
        lineHeight: "150%",
        wordBreak: "break-all",
    }
};

export default function SimpleMediaQuery() {
    return useMediaQuery('(min-width:600px)')
}

export const paperStyle = {
    // writable: true,
    width: 500,
    height: 160,
    marginLeft: "10px",
    marginBottom: "25px",
    // alignItems: "center",
    textAlign: "left",
    // justifyContent: "center",
    label: {
        margin: "0px",
        fontSize: "30px",
        // fontFamily: "Arial",
        color: "#5a5a5a"
        // color: "#003666"
    }
};

export const threshholds = {
    th_w1: 600,
    th_w2: 400,
    w1: 560,
    w2: 0.7,
    w3: 300,
}

export const educationStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    marginLeft: "0px",
    marginTop: "20px",
    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        // alignItems: "left",
        // textAlign: "left",
        marginBottom: "16px",
        fontSize: "17px",
        // fontFamily: "Arial",
        text: {
            margin: "1px",
            marginLeft: "4px",
            color: "#444",
            fontFamily: "Arial"
        }
    }
};

export const basicInfo = [
    {
        id: 0,
        icon: <PlaceIcon sx={infoStyle.info.icon}/>,
        label: 'Shenyang, China',
        link: "",
    },
    {
        id: 1,
        icon: <EmailIcon sx={infoStyle.info.icon}/>,
        label: 'Email',
        link: "mailto: realreasonwang@gmail.com",

    },
    {
        id: 2,
        icon: <GitHubIcon sx={infoStyle.info.icon}/>,
        label: 'Github',
        link: "https://github.com/Reason-Wang",
    },
    {
        id: 3,
        icon: <ArticleIcon sx={infoStyle.info.icon}/>,
        label: 'CV',
        // link: "C:\\Users\\WRX\\Projects\\react_project\\homepage\\src\\images\\NEU.png",
        link: "/root/files/CV.pdf"
    }
]

export const experienceStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    text:{
        margin: "1px",
        marginLeft: "0px",
        fontSize: "17px",
        color: "#444",
        // fontFamily: "Arial"
    }
};

export const experienceList = [
    {
        id: 0,
        Institute: "NEUDM",
        Start: "June 2022",
        End: "Oct 2022",
        Mentor: "Shi Feng",
        MentorLink: "https://dm.neuzsb.com/cse/fengshi/",
        Topic: "Emotion Detection"
    },
    {
        id: 1,
        Institute: "NEUIR",
        Start: "Oct 2021",
        End: "Dec 2021",
        Mentor: "Zhenghao Liu",
        MentorLink: "https://edwardzh.github.io/",
        Topic: "Question Answering"
    }
]

export const publicationStyle = {
    title: {
        fontSize: "17px",
        fontFamily: "Times New Roman",
        lineHeight: "120%",
    },
    year: {
        margin: "2px",
      fontSize: "16px",
        lineHeight: "140%",
    },
    author: {
      fontSize: "16px",
        fontFamily: "Times New Roman",
        margin: "0px",
        lineHeight: "50%",
    },
    detail: {
        fontSize: "16px",
        fontFamily: "Times New Roman",
    }
}