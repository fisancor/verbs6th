//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('DduMgYmJXVw=', 327, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap1_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qdyjPl4k3X8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9THWPjD/Hfg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('CelnNtDytY0=', 337, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap2_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5oIh0mxXC7w='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fkgGXHqU40Y='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('mkEZIahVMoU=', 347, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap3_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('E18o3UX3O4U='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nCiiWlw7Jwg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('8u9T3BxhLJI=', 357, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('i18rpPNPx14='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('K4ZQw6KGFno='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('qkEojzMA9qU=', 367, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap5_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('hAfrmCPNkF4='));
    valuation[1] = unescape(DecodeString('iyLGNT4rSoU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('3p6pHkskzmc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('rWaxR245tsw=', 377, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+JL8bJiLXHU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9uXg2iQ1fak='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 6;
    var weight = DecodeNumber('kKwJlGCOPko=', 387, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap7_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('C+Mr3V8LaUE='));
    valuation[1] = unescape(DecodeString('EkH/4/lEU3s='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap7_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('R10y/dNtb5Q='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 7;
    var weight = DecodeNumber('DVSaWpMY54w=', 397, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aNHtDukDbB0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap8_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7M0MeFMUm9g='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 8;
    var weight = DecodeNumber('2FofCy6qPnk=', 407, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap9_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7QB5xj1KLP0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap9_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fPKANNbhGsY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 9;
    var weight = DecodeNumber('4eJoGetAwEQ=', 417, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap10_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AAaS7m3STRg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xL7kBAHBqek='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 10;
    var weight = DecodeNumber('u3f+LmarmpQ=', 427, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap11_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('H/C+GCyl8FI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap11_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VbPDqL7Blos='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 11;
    var weight = DecodeNumber('N2ZtADOAE/o=', 437, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap12_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('uZ5Ho7KM2HY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LycCAzGEEEo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 12;
    var weight = DecodeNumber('xpNTOFSHCaE=', 447, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap13_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RKI4wne23po='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap13_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Ncr+fSKtzrM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 13;
    var weight = DecodeNumber('Ua8W9jVbFVU=', 457, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap14_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HFfuPQaz7zM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap14_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Lx1cfH48bM8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 14;
    var weight = DecodeNumber('fgU5BbkeULc=', 467, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap15_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('DXFxa7aWvYM='));
    valuation[1] = unescape(DecodeString('1q5byROJ9o8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap15_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ukOrG8E7DGo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 15;
    var weight = DecodeNumber('BCIcEvqN3wA=', 477, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap16_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('21Hjr6AFFcc='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap16_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('b4u9ATo6dfo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 16;
    var weight = DecodeNumber('iOKSaoxoiys=', 487, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap17_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UvwUdtsN97EZEjqt'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap17_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('laDUV/jKx9x6+60Z'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 17;
    var weight = DecodeNumber('IXcSRjQtC38=', 497, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap18_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('evsB6nHtgoE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap18_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('B3gxDABZe+w='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 18;
    var weight = DecodeNumber('ZZYo6jZQvoA=', 507, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap19_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Zbn3hfCACRs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap19_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('z5ufMmxLeiI='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 19;
    var weight = DecodeNumber('kCxYzb6TASY=', 517, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap20_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DU7Y3LuvyeI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap20_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aBly93L3zvk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 20;
    var weight = DecodeNumber('Iny3VM/QWzM=', 527, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap21_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EzbdrPxGvXA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap21_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oX1onWKqNc0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 21;
    var weight = DecodeNumber('BNr7yHkz4eQ=', 537, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap22_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('W8rmtyj/mgk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap22_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('cq930xJM4vk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 22;
    var weight = DecodeNumber('nbmKP/3ozWo=', 547, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap23_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VlnCpFfrnAo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap23_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('TbbCjYFUTZc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 23;
    var weight = DecodeNumber('AM0/DgEHu78=', 557, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap24_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6jNKjb968vs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap24_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('F3v2WCWQiog='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 24;
    var weight = DecodeNumber('2P1jIJcXz9o=', 567, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap25_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('suJDZTZaUk4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap25_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('gEVr50irLc8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 25;
    var weight = DecodeNumber('sQkJ9XbqsFQ=', 577, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap26_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AiK8Y6XxqX4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap26_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WV0cGig93sA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 26;
    var weight = DecodeNumber('AYYBDtZgCas=', 587, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap27_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0Qto592aaQE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap27_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SDOB1lM+7qk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 27;
    var weight = DecodeNumber('NGob84Zi7/A=', 597, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap28_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('06XP+Kzycsk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap28_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NpDqPrO3fEk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 28;
    var weight = DecodeNumber('BxJDCeNspjI=', 607, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap29_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5q40PnwbPE0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap29_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/P7rdfMgCKs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 29;
    var weight = DecodeNumber('yzfB96hDk8w=', 617, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap30_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('YKoyiJMknjg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap30_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nIsMHAfgQZc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 30;
    var weight = DecodeNumber('sFBXa8jv2zY=', 627, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap31_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KZY3cSzvScc='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap31_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KZY3cSzvScc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 31;
    var weight = DecodeNumber('ZgYJYJigc2E=', 637, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap32_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KdA9eJDlwEg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap32_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('8oNhUGxFML4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 32;
    var weight = DecodeNumber('2IH8VJJrmqM=', 647, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap33_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Jt0LiS9TWU4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap33_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1Wy5D9HTR9E='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 33;
    var weight = DecodeNumber('pDI/ksgji4M=', 657, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap34_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('Im3SUuUA9mQ='));
    valuation[1] = unescape(DecodeString('tn9SuXnby00='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap34_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AcTchXsQVgQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 34;
    var weight = DecodeNumber('UiXWD1Ol9OA=', 667, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap35_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yX3aCBhUDlE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap35_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+Z6cEPbWJWE='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 35;
    var weight = DecodeNumber('am+zce2uu6w=', 677, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap36_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mJynZQ35kAM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap36_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qXe5bn21ccE='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 36;
    var weight = DecodeNumber('S4M8ixjwcko=', 687, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap37_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hK33ShgkHoY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap37_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2KTz+C9fI3Y='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 37;
    var weight = DecodeNumber('9omkQzVQ5zY=', 697, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap38_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('TxmgUk6DQQ8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap38_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('MPX3BiWbb/M='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 38;
    var weight = DecodeNumber('/IZ5BCEXX3M=', 707, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap39_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mIoOVgGmZMc='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap39_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('fU+ynGwykWY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 39;
    var weight = DecodeNumber('w4ApcnlUVcc=', 717, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Fill the gaps";
    choice = $('#idGap40_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('67BFllrqF2U='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap40_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('67BFllrqF2U='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}






