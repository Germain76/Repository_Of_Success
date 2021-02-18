import CMS from "netlify-cms-app"
import youtube from './editorsWidgets/youtube';
import mdxTab from './editorsWidgets/mdxTab';

import imageInText from "./editorsWidgets/imageInText";
import partenaire from "./editorsWidgets/partenaire";


//import { CustomWidgetControl } from './customWidget/CustomWidgetControl';
//import { CustomWidgetPreview } from './customWidget/CustomWidgetPreview';

//CMS.registerWidget('mywidget', CustomWidgetControl, CustomWidgetPreview);

CMS.registerEditorComponent(youtube);
CMS.registerEditorComponent(mdxTab);
CMS.registerEditorComponent(imageInText);
CMS.registerEditorComponent(partenaire);