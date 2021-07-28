export {}
// import { Button, message } from 'antd';
// import { useEffect, useState } from 'react';
//
// const checkOptions = {
//     yesChecked: 'yesChecked',
//     noChecked: 'noChecked',
//     unchecked: ''
// };
//
// export interface IThreeStatesCheckbox {
//     handleSetFieldValues(valuesArr: { name: string; checkedState: string }[]): void;
//     t(text: string): string;
//     checkboxData: string[];
//     checkboxDataYesChecked: string[];
//     checkboxDataNoChecked: string[];
//     checkboxDataTranslation: any;
// }
//
// export interface IThreeStatesCheckboxChild {
//     checkboxField: { name: string; checkedState: string };
//     handleOnClick(fieldName: string, checkedState: string): void;
//     checkboxDataTranslation: any;
//     t(text: string): string;
// }
//
// export function ThreeStatesCheckboxChild({
//                                              checkboxField,
//                                              handleOnClick,
//                                              checkboxDataTranslation,
//                                              t
//                                          }: IThreeStatesCheckboxChild): JSX.Element {
//     switch (checkboxField.checkedState) {
//         case checkOptions.yesChecked:
//             return (
//                 <Button
//                     className='checked-as-yes-style'
//                     onClick={(): void => handleOnClick(checkboxField.name, checkOptions.yesChecked)}
//                     style={{
//                         color: 'white',
//                         backgroundColor: '#009900',
//                         borderRadius: '5px',
//                         margin: '5px',
//                         fontWeight: 'bold'
//                     }}
//                 >
//                     {t(checkboxDataTranslation[checkboxField.name])}
//                 </Button>
//             );
//         case checkOptions.noChecked:
//             return (
//                 <Button
//                     className='checked-as-no-style'
//                     onClick={(): void => handleOnClick(checkboxField.name, checkOptions.noChecked)}
//                     style={{
//                         color: 'white',
//                         backgroundColor: '#FF0000',
//                         borderRadius: '5px',
//                         margin: '5px',
//                         fontWeight: 'bold'
//                     }}
//                 >
//                     {t(checkboxDataTranslation[checkboxField.name])}
//                 </Button>
//             );
//         default:
//             return (
//                 <Button
//                     className='unchecked-style'
//                     onClick={(): void => handleOnClick(checkboxField.name, checkOptions.unchecked)}
//                     style={{
//                         backgroundColor: 'white',
//                         borderRadius: '5px',
//                         margin: '5px',
//                         fontWeight: 'bold'
//                     }}
//                 >
//                     {t(checkboxDataTranslation[checkboxField.name])}
//                 </Button>
//             );
//     }
// }
//
// export function ThreeStatesCheckbox({
//                                         t,
//                                         handleSetFieldValues,
//                                         checkboxData,
//                                         checkboxDataYesChecked,
//                                         checkboxDataNoChecked,
//                                         checkboxDataTranslation
//                                     }: IThreeStatesCheckbox): JSX.Element {
//     function getValuesToShow(): any[] {
//         const initialValues = [];
//         checkboxData.forEach((field: string): void => {
//             if (checkboxDataYesChecked && checkboxDataYesChecked.includes(field)) {
//                 initialValues.push({
//                     name: field,
//                     checkedState: checkOptions.yesChecked
//                 });
//             } else if (checkboxDataNoChecked && checkboxDataNoChecked.includes(field)) {
//                 initialValues.push({
//                     name: field,
//                     checkedState: checkOptions.noChecked
//                 });
//             } else {
//                 initialValues.push({
//                     name: field,
//                     checkedState: checkOptions.unchecked
//                 });
//             }
//         });
//         return [...initialValues];
//     }
//
//     const [checkboxFieldsToShow, setCheckboxFieldsToShow] = useState(getValuesToShow());
//
//     useEffect(() => {
//         setCheckboxFieldsToShow(getValuesToShow());
//     }, [checkboxData, checkboxDataNoChecked, checkboxDataYesChecked]);
//
//     function handleOnClick(fieldName: string, checkedState: string): void {
//         const tempArr = [...checkboxFieldsToShow];
//         const isEqualName = (field: { name: string; checkedState: string }): boolean =>
//             field.name === fieldName;
//         const fieldIndex = tempArr.findIndex(isEqualName);
//         if (fieldIndex === -1) {
//             message.error('Error in three-states-checkbox component');
//             throw new Error(
//                 `${fieldName} is not present in fields-to-show array in threeStatesCheckbox component. fields to show are: ${checkboxFieldsToShow}`
//             );
//         } else {
//             switch (checkedState) {
//                 case checkOptions.yesChecked:
//                     tempArr[fieldIndex] = { name: fieldName, checkedState: checkOptions.noChecked };
//                     break;
//                 case checkOptions.noChecked:
//                     tempArr[fieldIndex] = { name: fieldName, checkedState: checkOptions.unchecked };
//                     break;
//                 default:
//                     tempArr[fieldIndex] = { name: fieldName, checkedState: checkOptions.yesChecked };
//             }
//             setCheckboxFieldsToShow([...tempArr]);
//             handleSetFieldValues(tempArr);
//         }
//     }
//
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//             {checkboxFieldsToShow.map((checkboxField: { name: string; checkedState: string }) => (
//                 <ThreeStatesCheckboxChild
//                     checkboxField={checkboxField}
//                     handleOnClick={handleOnClick}
//                     checkboxDataTranslation={checkboxDataTranslation}
//                     t={t}
//                 />
//             ))}
//         </div>
//     );
// }
