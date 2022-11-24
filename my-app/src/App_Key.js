import React from 'react';
import KeyWord from './component_Key/keyWord'
import DeleteButton from './component_Key/deleteButton'
import BackButton from './component_Key/backButton'
import LanguageButton from './component_Key/languageButton'
import UpperCase from './component_Key/upperCase'
import './index.css';
const alphabetHebrew = [

  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
  ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ',],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף',],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.'],
   ["\xa0"]
]


const alphabetEnglish = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
  ['q', "w", 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  ["\xa0"]
];



class AppKey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { language: alphabetHebrew, text: " ", LanguageTextButton: "English", upperCase: false ,upperCaseText: "upperCase"}
  }

  changeLanguage = () => {
    if (this.state.language === alphabetHebrew)
      this.setState({ language: alphabetEnglish, LanguageTextButton: "עברית" })

    else { this.setState({ language: alphabetHebrew, LanguageTextButton: "English" }) }
  }
  
  

  render() {
    return (
      <div>
        <textarea id='bord' value={this.state.text}></textarea>
        {this.state.language.map((item, idx) => <div key={item}>
          {item.map((letter, jjj) => <KeyWord item={letter} key={letter} onclick1={() =>this.state.upperCase?  this.setState({ text: this.state.text + letter.toUpperCase(),upperCaseText:"lowerCase" }) :this.setState({ text: this.state.text + letter })}/>)}</div>)}
        <LanguageButton onclick={() => this.changeLanguage()} text={this.state.LanguageTextButton} />
        <BackButton onclick={() => this.setState({ text: this.state.text.slice(0, this.state.text.length - 1) })} />
        <DeleteButton onclick={() => this.setState({ text: this.state.text = "" })} />
        <UpperCase onclick={() =>this.setState({upperCase: !this.state.upperCase})} upperCaseText={this.state.upperCaseText} />
      </div>
    )
  }
}

export default AppKey;
