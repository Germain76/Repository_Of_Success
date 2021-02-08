import CMS from "netlify-cms-app"
import youtube from './editorsWidgets/youtube';
import mdxTab from './editorsWidgets/mdxTab';
import imageAndText from './editorsWidgets/imageAndText'


//import { CustomWidgetControl } from './customWidget/CustomWidgetControl';
//import { CustomWidgetPreview } from './customWidget/CustomWidgetPreview';

//CMS.registerWidget('mywidget', CustomWidgetControl, CustomWidgetPreview);

CMS.registerEditorComponent(youtube);
CMS.registerEditorComponent(mdxTab);
CMS.registerEditorComponent(imageAndText);