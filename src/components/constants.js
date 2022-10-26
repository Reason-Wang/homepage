import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import {useMediaQuery} from "@mui/material";

export const infoStyle = {
    margin: "20px",
    marginRight: "60px",
    width: 200,
    display: "flex",

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
        marginLeft: '20px',
        marginTop: '-10px',
        alignItems: "center",
        lineHeight: "150%",
    }
};

export default function SimpleMediaQuery() {
    return useMediaQuery('(min-width:600px)')
}

export const paperStyle = {
    // writable: true,
    width: 500,
    height: "100%",
    marginLeft: "10px",
    marginBottom: "60px",
    alignItems: "center",
    textAlign: "left",
    justifyContent: "center",
    label: {
        margin: "10px",
        fontSize: "30px",
        // fontFamily: "Arial",
        color: "#5a5a5a"
        // color: "#003666"
    }
};

export const educationStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    marginLeft: "20px",
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
        link: "../../images/NEU.png"
    }
]

export const experienceStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    text:{
        margin: "1px",
        marginLeft: "10px",
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