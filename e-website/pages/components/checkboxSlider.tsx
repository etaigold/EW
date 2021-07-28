export {}
// import { Checkbox, InputNumber } from 'antd';
// import { CheckboxChangeEvent } from 'antd/es/checkbox';
// import React, { useEffect, useState } from 'react';
//
// export interface ICheckboxSlider {
//     valuesArr: number[];
//     setFieldValue(fieldName: string, value: boolean | number | string): void;
//     t(text: string): string;
//     fieldFrom: { name: string };
//     initialFrom: number;
//     fieldTo: { name: string };
//     initialTo: number;
//     min: number;
//     max: number;
//     step: number;
// }
//
// export function CheckboxSlider({
//                                    t,
//                                    setFieldValue,
//                                    valuesArr,
//                                    fieldFrom,
//                                    initialFrom,
//                                    fieldTo,
//                                    initialTo,
//                                    min,
//                                    max,
//                                    step
//                                }: ICheckboxSlider): JSX.Element {
//     const defaultCheckboxValues = {};
//     valuesArr.forEach((field: number) => {
//         defaultCheckboxValues[field] = false;
//     });
//     const [from, setFrom] = useState(initialFrom);
//     const [to, setTo] = useState(initialTo);
//     const [clicksCount, setClicksCount] = useState(0);
//     const [checkedOptions, setCheckedOptions] = useState({ ...defaultCheckboxValues });
//
//     function prepareCheckedValuesToShow(): void {
//         setFrom(initialFrom);
//         setTo(initialTo);
//         const tempCheckedObject = { ...checkedOptions };
//         if (from && to) {
//             Object.keys(tempCheckedObject).forEach((key: any) => {
//                 tempCheckedObject[key] = key >= from && key <= to;
//             });
//             setCheckedOptions(tempCheckedObject);
//         } else if (from) {
//             Object.keys(tempCheckedObject).forEach((key: any) => {
//                 tempCheckedObject[key] = key >= from;
//             });
//             setCheckedOptions(tempCheckedObject);
//         } else if (to) {
//             Object.keys(tempCheckedObject).forEach((key: any) => {
//                 tempCheckedObject[key] = key <= to;
//             });
//             setCheckedOptions(tempCheckedObject);
//         } else {
//             setCheckedOptions({ ...defaultCheckboxValues });
//         }
//     }
//
//     function onChange(e: CheckboxChangeEvent): void {
//         const val = e.target.value;
//         if (clicksCount === 0) {
//             setFieldValue(fieldFrom.name, val);
//             setFrom(val);
//             setTo(null);
//             setFieldValue(fieldTo.name, null);
//             setClicksCount(1);
//         } else if (from && val < from) {
//             setFieldValue(fieldFrom.name, val);
//             setFrom(val);
//             setTo(null);
//             setFieldValue(fieldTo.name, null);
//             setClicksCount(0);
//         } else {
//             setFieldValue(fieldTo.name, val);
//             setTo(val);
//             setClicksCount(0);
//         }
//         prepareCheckedValuesToShow();
//     }
//
//     useEffect(() => {
//         prepareCheckedValuesToShow();
//         if (from && !to) {
//             setClicksCount(1);
//         } else if (from && to) {
//             setClicksCount(0);
//         }
//     }, [to, from, initialFrom, initialTo]);
//
//     function parseNumbersToShow(number: number): string {
//         let numberSize = '';
//         if (number.toString().length > 6) {
//             numberSize = 'M';
//         } else if (number.toString().length > 3) {
//             numberSize = 'K';
//         }
//         if (numberSize === 'M') {
//             const shortenedNumber = number / 1000000;
//             return `${shortenedNumber} ${numberSize}`;
//         }
//         if (numberSize === 'K') {
//             const shortenedNumber = number / 1000;
//             return `${shortenedNumber} ${numberSize}`;
//         }
//         return number.toString();
//     }
//     return (
//         <div>
//             <div className='slider-selection'>
//                 <div className='slider-buttons'>
//                     {Object.keys(checkedOptions).map((key: string) => (
//                         <Checkbox value={key} checked={checkedOptions[key]} onChange={onChange}>
//                             {parseNumbersToShow(parseInt(key, 10))}
//                         </Checkbox>
//                     ))}
//                 </div>
//             </div>
//             <div className='slider-selection'>
//                 <div className='slider-input'>
//                     <div className='slider-input-inner'>
//                         {t(`propertyRequest:fields.${fieldFrom.name}`)}
//                         <InputNumber
//                             style={{ width: '100%', alignSelf: 'center' }}
//                             onChange={(value: number) => {
//                                 setFieldValue(fieldFrom.name, value);
//                                 setFrom(value);
//                                 prepareCheckedValuesToShow();
//                             }}
//                             value={initialFrom}
//                             min={min}
//                             max={max}
//                             step={step}
//                             formatter={(value: number | string) =>
//                                 `₪ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//                             }
//                         />
//                     </div>
//                 </div>
//                 <div className='slider-input'>
//                     <div className='slider-input-inner'>
//                         {t(`propertyRequest:fields.${fieldTo.name}`)}
//                         <InputNumber
//                             style={{ width: '100%', alignSelf: 'center' }}
//                             onChange={(value: number) => {
//                                 setFieldValue(fieldTo.name, value);
//                                 setTo(value);
//                                 prepareCheckedValuesToShow();
//                             }}
//                             value={initialTo}
//                             min={min}
//                             max={max}
//                             step={step}
//                             formatter={(value: number | string) =>
//                                 `₪ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//                             }
//                         />
//                     </div>
//                 </div>
//             </div>
//             <style jsx>{`
//         .slider-selection {
//           display: flex;
//           justify-content: center;
//           flex-wrap: wrap;
//         }
//         .slider-input {
//           margin: 10px;
//           padding: 10px;
//           display: flex;
//           flex-wrap: wrap;
//         }
//         .slider-input-inner {
//           display: flex;
//           flex-wrap: wrap;
//           flex-direction: column;
//         }
//         .slider-buttons {
//           display: flex;
//           flex-wrap: wrap;
//         }
//         .slider-buttons :global(.ant-checkbox-wrapper) {
//           border-radius: 5px;
//           border: solid 1px antiquewhite;
//           background-color: white;
//         }
//
//         .slider-buttons :global(.ant-checkbox) {
//           display: none;
//         }
//
//         .slider-buttons :global(.ant-checkbox-wrapper-checked) {
//           border-radius: 5px;
//           background-color: #ff7100;
//           border: solid 1px antiquewhite;
//           color: white;
//         }
//       `}</style>
//         </div>
//     );
// }
