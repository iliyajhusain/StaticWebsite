﻿﻿# Kore Pickers Plugin
Kore pickers plugin is collection of clock,date,date range, task menu and radio options menu pickers which can be added to compose bar or open on demand via javascript


## Installation Sample for Clock picker


```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
 clock:{
            showOnFooter:true,
	}
};

chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```

<img width="223" alt="clock-picker" src="https://user-images.githubusercontent.com/58174664/179699195-000968e5-3ac0-4c3e-bfef-8135ec47f41f.png">




## Installation Sample for Date picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
  date:{
        showOnFooter: true
    }
};

chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```
<img width="223" alt="Date-picker" src="https://user-images.githubusercontent.com/58174664/179699352-332d9e89-d4ec-4d98-8d3e-9a72ee5597bc.png">


## Installation Sample for Date Range picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
  daterange:{
        showOnFooter: true
    }
};

chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```

<img width="226" alt="Date-range" src="https://user-images.githubusercontent.com/58174664/179699524-0958f362-e440-4c57-9a54-e567eb1a3ff1.png">

## Installation Sample for Task picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
  task:{
        showOnFooter: true
    }
};

chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```
<img width="227" alt="task-picker" src="https://user-images.githubusercontent.com/58174664/179709965-6999c684-32e3-45bb-82ea-7ae96bb702f1.png">

## Installation Sample for Radio option picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
  radiooption:{
        showOnFooter: true
    }
};

chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```
<img width="227" alt="radio-option-picker" src="https://user-images.githubusercontent.com/58174664/179710103-9e661603-b7cf-4df3-8596-27b5630a55e1.png">


## Installation Sample for combination
Multiple pickers can be configured by passing multiple options in options object

Sample for clock and date picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
  date:{
        showOnFooter: true
    },
  clock:{
	showOnFooter: true
    }
};

chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```
Available options are available here
<details>
 <summary>options</summary>
	
```js
 clock:{
            showOnFooter:true, // to append clock picker icon to the footer
            title: "Please choose", // title to display
        },
        daterange:{
            showOnFooter:true, // to append datepicker icon to the footer
            title: "Please choose", // title to display
            format: 'DD-MM-YYYY', // format of the date
            startDate: '', // specifies start date for range selection
            endDate: '' // specifies end date for range selection
        },
        date:{
            showOnFooter:true, // to append datepicker icon to the footer
            title: "Please choose",  // title to display
            format: 'DD-MM-YYYY',  // format of the date
           startDate: '', // specifies start date for selection
            endDate: '' // specifies end date for selection
        },
        task:{
            showOnFooter:true, // to append task icon to the footer
            "tasks": [
                {
                    "title": "Get balance", // title of the task
                    "icon": 'data:image/png;base64,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',  // Icon for the task
                    "postback": {
                        "title": "Get my leave balance", // message to be	 displayed after selecting the task
                        "value": "leaveintent" // value sent to bot as payload
                    }
                },
                {
                    "title": "Change Password",
                    "icon": 'data:image/png;base64,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',
                    "postback": {
                        "title": "change my password",
                        "value": "leaveintent"
                    }
                },
                {
                    "title": "Pay Bill",
                    "icon": 'data:image/png;base64,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',
                    "postback": {
                        "title": "Pay the bill",
                        "value": "leaveintent"
                    }
                },
                {
                    "title": "Setup Balance Alert",
                    "icon": 'data:image/png;base64,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',
                    "postback": {
                        "title": "Give alert message for balance",
                        "value": "leaveintent"
                    }
                }
            ],
            "heading": "Choose Task" // heading for the task picker
        },
        radiooption:{
            showOnFooter:true, // to append radio option picker icon to the footer
            "heading": "Please choose", // heading to be displayed
            "radioOptions": [
                {
                    "title": "Shanmuga", // title for the task
                    "value": "1234 4567 5678 6789", // description for the task
                    "postback": {
                        "title": "Transaction Successful", // message to be displayed after selection of radio option
                        "value": "Payment Successful" // value that is sent to bot as payload
                    }
                },
                {
                    "title": "Madhu",
                    "value": "1234 4567 5678 9876",
                    "postback": {
                        "title": "radioOptionDetails",
                        "value": "AccountData"
                    }
                },
                {
                    "title": "Santhosh",
                    "value": "4678 1234 5678 9876",
                    "postback": {
                        "title": "Get my leave balance",
                        "value": "leaveintent"
                    }
                },
                {
                    "title": "Manjula",
                    "value": "9876 1234 4567 5678",
                    "postback": {
                        "title": "Transaction Successful",
                        "value": "leaveintent"
                    }
                },
                {
                    "title": "Ravi Kiran",
                    "value": "8976 5677 7946 2345",
                    "postback": {
                        "title": "radioOptionDetails",
                        "value": "leaveintent"
                    }
                },
            ]
        }
```
	
</details>


## Trigger picker via Javascript

Sample for date picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
    title: "Date Picker",
};
const pickerRef=new KoreFileUploaderPlugin()

chatWindowInstance.installPlugin(pickerRef);

pickerRef.showDatePicker(options);
```

Sample for Date range picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
    title: "Date  Range Picker",
};
const pickerRef=new KoreFileUploaderPlugin()

chatWindowInstance.installPlugin(pickerRef);

pickerRef.showDateRangePicker(options);
```

Sample for Clock picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = {
    text: "display",
    title: "Clock Picker",
};
const pickerRef=new KoreFileUploaderPlugin()

chatWindowInstance.installPlugin(pickerRef);

pickerRef.showClockPicker(options);
```


Sample for Radio option picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = [
    {
        "title": "Shanmuga",
        "value": "1234 4567 5678 6789",
                    "postback": {
                        "title": "Transaction Successful",
                        "value": "Payment Successful"
                    }
    }
  ];
const pickerRef=new KoreFileUploaderPlugin()

chatWindowInstance.installPlugin(pickerRef);

pickerRef.showRadioOptionPicker(options);
```

Sample for Task picker

```js
import { KorePickersPlugin } from 'kore-web-sdk';

const options = [
   [
                {
                    "title": "Get balance",
                    "icon": 'data:image/png;base64,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',
                    "postback": {
                        "title": "Get my leave balance",
                        "value": "leaveintent"
                    }
                }
	
  ];
const pickerRef=new KoreFileUploaderPlugin()

chatWindowInstance.installPlugin(pickerRef);

pickerRef.showTaskPicker(options);
```


## For UMD Installations

<details>

 <summary>Click here</summary>
	<br>
 
1. Include kore-picker-plugin-umd.js in index.html

```js
<script  src="PATH_TO_FILE/kore-picker-plugin-umd.js"></script>

```
2. Get plugin reference

```js
var KorePickersPlugin=KorePickersPluginSDK.KorePickersPlugin;
```
3. Sample installation for Clock picker

```js

const options = {
    clock:{
        showOnFooter:true
    }
}
chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```

4. Sample installation for Date picker

```js

const options = {
    date:{
        showOnFooter:true
    }
}
chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```

5. Sample installation for Date Range picker

```js

const options = {
    daterange:{
        showOnFooter:true
    }
}
chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```
6. Sample installation for Task picker

```js

const options = {
    task:{
        showOnFooter:true
    }
}
chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```

7. Sample installation for Radio Option picker

```js

const options = {
    radiooption:{
        showOnFooter:true
    }
}
chatWindowInstance.installPlugin(new KorePickersPlugin(options));
```

## Trigger picker via Javascript
1. Include kore-picker-plugin-umd.js in index.html

```js
<script  src="PATH_TO_FILE/kore-picker-plugin-umd.js"></script>

```
2. Get plugin reference

```js
var KorePickersPlugin=KorePickersPluginSDK.KorePickersPlugin;
```
3. Sample installation for Clock picker

```js

const options = {
    clock:{
        title: "Clock Picker"
    }
}
const pickerConfig = new KorePickersPlugin();
chatWindowInstance.installPlugin(pickerConfig);
pickerConfig.showClockPicker(options)
```

4. Sample installation for Date picker

```js

const options = {
    date:{
        showOnFooter:true
    }
}
const pickerConfig = new KorePickersPlugin();
chatWindowInstance.installPlugin(pickerConfig);
pickerConfig.showDatePicker(options)
```

5. Sample installation for Date Range picker

```js

const options = {
    daterange:{
        showOnFooter:true
    }
}
const pickerConfig = new KorePickersPlugin();
chatWindowInstance.installPlugin(pickerConfig);
pickerConfig.showDateRangePicker(options)
```
6. Sample installation for Task picker

```js

const options = [
   [
                {
                    "title": "Get balance",
                    "icon": 'data:image/png;base64,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',
                    "postback": {
                        "title": "Get my leave balance",
                        "value": "leaveintent"
                    }
                }
	
  ];
const pickerConfig = new KorePickersPlugin();
chatWindowInstance.installPlugin(pickerConfig);
pickerConfig.showTaskPicker(options)
```

7. Sample installation for Radio Option picker

```js

const options = [
    {
        "title": "Shanmuga",
        "value": "1234 4567 5678 6789",
                    "postback": {
                        "title": "Transaction Successful",
                        "value": "Payment Successful"
                    }
    }
  ];
const pickerConfig = new KorePickersPlugin();
chatWindowInstance.installPlugin(pickerConfig);
pickerConfig.showRadioOptionPicker(options)
```

	
</details>
