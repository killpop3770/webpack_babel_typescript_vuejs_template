import CamList from "./CamListSingleton/CamList";
import {createApp} from "vue";
import App from "./App.vue"; //static analyzer failed at this moment!

let camListJSON: string = "{\n" +
    "    \"camList\": {\n" +
    "        \"cam\": [{\n" +
    "                \"camUrl\": \"http://admin:coolGrap356@192.168.5.65/ISAPI/Streaming/channels/101/picture?snapShotImageType=JPEG\",\n" +
    "                \"camUser\": \"admin\",\n" +
    "                \"camPwd\": \"coolGrap356\",\n" +
    "                \"camIsActive\": false,\n" +
    "                \"camModel\": \"hiwatch DS-I214W\",\n" +
    "                \"camRoi\": [\n" +
    "                    \"[640 300], [640 700], [1280 700], [1280 300]\"\n" +
    "                ],\n" +
    "                \"camGroup\": \"Interpolitex\",\n" +
    "                \"camName\": \"Камера 1\"\n" +
    "            },\n" +
    "            {\n" +
    "                \"camUrl\": \"http://admin:coolGrap356@192.168.5.119/ISAPI/Streaming/channels/101/picture?snapShotImageType=JPEG\",\n" +
    "                \"camUser\": \"admin\",\n" +
    "                \"camPwd\": \"coolGrap356\",\n" +
    "                \"camIsActive\": true,\n" +
    "                \"camModel\": \"hiwatch DS-I202\",\n" +
    "                \"camRoi\": [\n" +
    "                    \"null\"\n" +
    "                ],\n" +
    "                \"camGroup\": \"Interpolitex\",\n" +
    "                \"camName\": \"Камера 2\"\n" +
    "            }\n" +
    "        ]\n" +
    "    },\n" +
    "    \"serverIp\": \"192.168.5.102\"\n" +
    "}";


// For later steps...
//https://refactoring.guru/ru/design-patterns/facade/java/example
//https://www.typescriptlang.org/docs/handbook/2/objects.html
// interface ICamList{
    // server_ip : string;
    // movdetColorTresh: number; //60,
    // movdetDiffTresh: number; //100,
    // movdetTimerPeriod: number; //20
    // confThresh: number; //0.45,
    // nmsThresh: number; //0.35
    // cam_list: Cam[];
    // cam: Cam;
    // camEventList: CamEvent[];
// }

let test: any =  JSON.parse(camListJSON);
let camList = new CamList(test);

console.log(camList.serverIp);
// Supress this sh!t because we choice hard-coding style temporarily
// @ts-ignore
console.log(camList.camList.cam.length);

createApp(App).mount("#app");
