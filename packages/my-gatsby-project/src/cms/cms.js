import CMS from "netlify-cms-app"
import youtube from './editorsWidgets/youtube';


//import { CustomWidgetControl } from './customWidget/CustomWidgetControl';
//import { CustomWidgetPreview } from './customWidget/CustomWidgetPreview';

//CMS.registerWidget('mywidget', CustomWidgetControl, CustomWidgetPreview);

CMS.registerEditorComponent(youtube);