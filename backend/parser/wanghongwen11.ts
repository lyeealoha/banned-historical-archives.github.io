import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '王洪文关于学习毛主席理论问题指示的讲话';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
对毛主席关于理论问题的指示，要逐字逐句地领会，主席的指示我也领会不深，到主席那里问了几次。主席作了解释。现在我还领会不深。主席的指示进一步发展了马克思主义关于无产阶级专政的原理深刻发挥了继续革命的理论。主席指示告诉我们，既要抓好上层建筑领域里的革命，又要搞好经济领域里的继续革命。限制资产阶级法权，铲除滋生资本主义的土壤，打击新生的资产阶级分子，防止资本主义复辟，为过渡到共产主义而斗争这是全党的任务。
主席几段指示，第一段是纲，指出了无产阶级专政的必要性和重要性；第二段是分析社会主义国家经济制度，指出了社会主义社会存在着资产阶级法权，存在着滋生资本主义的土壤，存在着资本主义复辟的危险性，以及如何防止资本主义复辟的重要条件；第三段是从分析社会主义国家阶级关系中，指出产生资本主义和资产阶级的可能性。对这几段话，我是这样理解的，也就是主席再三讲明白的，还不能说我理解那样深透。
“列宁为什么说对资产阶级专政”，为什么只提到列宁而未提到马克思、恩格斯？马、恩提出了无产阶级专政，无产阶级专政是马克思主义的精髓（有人问什么叫精髓）。精髓，是马克思主义最本质、最核心、最精华的东西；是无产阶级专政。把无产阶级专政抽掉，就无所谓马克思主义。但马、恩也只有巴黎公社的经验，还没有建立无产阶级专政的国家，实践经验也不多（指无产阶级专政）。斯大林对资产阶级法权无深刻认识，一九三六年提出消灭阶级，这个理论上的错误不小，后来有所认识，比如《苏联社会主义经济问题》提出了生产力和生产关系的矛盾。他宣布阶级没有了，但还是抓了阶级斗争，比如斗了几个主要机会主义路线的头子，白俄罗斯反革命叛乱坚决镇压了。他有了认识，没有形成系统的理论，问题就在这个地方。（一）列宁对马克思主义发展的著作多；（二）在十月革命前后，列宁面临的任务更实际，建立了第一个无产阶级专政国家，有七年经验；（三）列宁对第二国际叛徒考茨基的斗争很尖锐，有与修正主义斗争的经验，在斗争中发展了马克思关于无产阶级专政的理论。所以毛主席在这里只提到列宁，而未提马、恩，是因为列宁捍卫、继承、发展了马克思主义。只提列宁，而未提马、恩，并不是马、恩没有提无产阶级专政，是说列宁在无产阶级专政下这方面的实际经验多，更接近社会主义革命的实际。
“这个问题要搞清楚”，我的马克思主义基础不好，不清楚就问嘛！我也想追根，找了主席好几次，哪些问题要搞清楚呢？如社会主义政权和国家经济制度中，有无资本主义因素、资产阶级法权；为什么会产生资本主义，怎样限制；对经济基础要不要继续革命，怎样革命；按劳分配、八级工资制是社会主义分配原则，为什么说搞不好会产生资本主义、资产阶级。讲无产阶级专政，就讲这些，不讲这些东西，无产阶级专政就讲不清楚。理论上糊涂，行动上必然盲目，这就是主席讲的“这个问题不搞清楚，就会变修正主义。要使全国知道”。全国人民不懂得无产阶级专政的理论，怎么对资产阶级实行专政呢？劳动群众的专政，是多数人压迫少数剥削阶级，这就是压迫新老资产阶级分子。
“这些跟旧社会没有多少差别”。主席讲了有差别，一个是社会主义国家，一个是所有制变了即国家政权阶级性质变了，无产阶级专政代替了资产阶级专政，生产关系变了，劳动人民不仅是国家的主人，也是生产资料的主人。但主席指示精神强调是没有多少差别是从资产阶级法权这个角度上提出来的。列宁讲了这么一句：“没有资产阶级的资产阶级国家”是一样的。什么是资产阶级法权？资产阶级法权的基础是私有制，或者叫核心。它的特点、特征是等级制，是形式上的平等掩盖着事实上的不平等，它的阶级内容是剥削阶级压迫劳动人民。资产阶级法权是资本主义的产物，在社会主义制度下还不可避免地存在。因为资本主义不可能孕育着社会主义因素，社会主义是在资本主义的废墟上建立起来的。从内容上看，八级工资制、按劳分配、货币交换，这个和资本主义社会没有多少差别，社会主义社会如有按劳分配，一来是社会主义分配原则，二来是资产阶级法权。说它是社会主义原则，就是消灭了剥削，这就和资本主义不同；资产阶级法权，按劳分配又分成了等级，事实上不平等，与旧社会差不多。从本质上看，主要从分配的等级制度沿袭了资产阶级的等级制度，资产阶级法权的特点、特征是等级制。
“这只能在无产阶级专政下加以限制”。为什么要加以限制？主席提出这个问题以后，我又清楚又不清楚。主席叫我想想自己，我又比较清楚了。从反面看，资产阶级法权又是产生资产阶级的土壤，苏修工资差距大，实行高工资、高奖金、高报酬，就是这样产生特权阶层和特权阶级的。从正面看，我们无产阶级专政如此巩固，有主席的革命路线和正确的政策，对资产阶级法权给了一些必要的限制，但这种限制，还没有消除产生资产阶级的土壤。如不加以限制，资产阶级法权就会发展、扩大、自由泛滥起来，如奖金挂帅、物质刺激，进而发展资本主义。主席多次提出这个问题，说苏修那一套搞不得。刘少奇搞了危险很大，林彪也很积极的想利用这个东西发展资本主义。“林彪一类如上台，搞资本主义制度很容易”。主席讲这个是主席预言林彪一类还要出来，搞资本主义很容易，为什么？鉴于苏修“卫星上天，红旗落地”的教训，我们党内多次路线斗争，特别是第十次路线斗争的教训，回忆国际、国内的历史经验就清楚了。所以，主席说“要多看点马列主义的书”。如果不弄清理论上的问题，这些现象就搞不清楚。
主席为什么引用列宁说：“小生产是经常地、每日每时地、自发地和大批地产生着资本主义和资产阶级的。”当时列宁这段话，是小生产未进入集体农庄情况下讲的，现在我国已集体化是否适用？我体会主席引用列宁这段话是对列宁思想的恢复，因为斯大林不承认社会主义社会有阶级、有阶级斗争，没有看清小生产自发势力的巨大影响，主席提出这段话，说明了列宁的论断没有过时。那么，列宁的这段话是否符合我国的情况，主席反复讲了符合的理由，（一）我们有个体生产的残余（二）小生产包括原来个体生产的农民，他们是从小生产过来的，小生产固有的特点还存在，自私性（注黄冈版作私有性）、自发资本主义倾向、习惯势力等等，发展到一定程度，就会产生资本主义。主席这样一讲，我就清楚得多，原来道理就在这里。
“工人阶级一部分，党员一部分，也有这种情况”。主席这个指示，开始我是很不理解的。为什么在小生产后面讲这个？主席说，你想想你们工人一部分，党员一部分是从哪个阶级来的罗难道有地主阶级、资产阶级的吗？主席这个指示，是从分析社会主义阶级关系和社会主义现实阶级斗争情况提出来的，是对列宁思想的重大发展，充分说明了社会主义社会阶级斗争的尖锐性、复杂性，资本主义复辟有阶级性，不仅是地、富、反、坏、右，在我们领导阶级、先锋队内部也会产生资产阶级分子、反革命分子。
“无产阶级中，机关工作人员中，都有发生资产阶级生活作风的”。有人提出这样一个问题，无产阶级和工人阶级有无区别？我的理解，无产阶级包括工人阶级也包括一部分雇农，无产阶级中，机关工作人员中，也有产生资产阶级生活作风的，（一）指的范围更广泛些；（二）资产阶级作风是多方面的，反映政治、思想、经济各方面各条战线；（三）资产阶级生活作风非常广泛，影响到个人变质、国家变修，影响到下一代。主席很重视这个问题。这次我才搞清楚，资产阶级生活作风是产生资产阶级分子的温床，是滋生资本主义的土壤，是培植人们贪图享受的，搞特殊、脱离群众，它是动摇无产阶级专政的重要因素。
主席对马列主义的重大发展，就是从思想上、理论上丰富发展了马克思主义。
（一）不搞清楚对资产阶级专政的理论问题，就会变修正主义，这是在马克思主义发展史上第一次明确、尖锐、肯定地提出的科学论断；
（二）按劳分配是资产阶级法权，而且与旧社会没有多少区别。这是主席对社会主义国家经济关系、阶级关系需要解决的重大理论问题，对马克思主义经济学的重大发展；
（三）对资产阶级法权只能在无产阶级专政下加以限制列宁讲了，斯大林没有讲，主席继承和发展了列宁的思想；
（四）工人阶级一部分，党员一部分，也有产生资产阶级的情况。这是对社会主义时期实际情况的具体分析，而且对无产阶级专政国家专政范围给予新的内容。
现在发表了“三十三条语录”，毛主席看过好几遍。主席说：“有两条顺序要颠倒一下，增加几条很好。”这是一个完整的体系，这是无产阶级最基本的东西，有了这个纲，读书就开了路。
对资产阶级法权要一分为二，即要肯定它的历史作用，又要看到它的消极方面，不能让它扩大、发展、自由泛滥。你肯定过了头，过于扩大它的作用，还要不要共产主义？不要一分为二批过了头，把它说成很坏很坏，似乎马上取消，你要不要社会主义？要一分为二辩证地看。三十三条主席看过的，它的顺序安排，本身就构成了一个完整的体系，打乱就不好，重复可以，条条都有侧重点，看你怎么领会。
语录是按主席指示顺序编的，所以说它是完整的体系，为了深刻地理解主席的指示，是根据主席四段指示选编的。是一回事，不是两回事。讲“语录”，“语录”虽未分标题，一看结构很清楚，就是主席几段话，应该分四部分，“无产阶级专政问题”、“资产阶级法权问题”、“产生新的资产阶级分子问题”注黄冈版作新生资产阶级分子问题、“学习问题”。讲后面几个问题，不能离开无产阶级专政。后面几个问题，是对无产阶级专政的进一步阐明。开始可能有百花齐放的，有个学习、领会过程，有个深化过程，不要怕讲，大家都来讲，认识就深化了，再认识，再总结，再认识，再深化。
有人说，只要存在资产阶级法权，一定会产生资本主义。资产阶级法权是产生资本主义的土壤、条件，但能否产生资本主义，是否必然产生资本主义，不在资产阶级法权本身，资产阶级法权有两种可能性，一种在革命路线指引下，能为社会主义建设服务；第二种情况，在受资本主义侵袭的人，资本主义思想严重的人面前，资产阶级法权就会发展、泛滥、产生资本主义。所以说，重点决定的是路线、思想。在无产阶级专政下加以限制，就要讲路线，限制资产阶级法权，就是限制它的消极作用。这是向前看的，向共产主义看的，必须限制，要引导它为社会主义建设服务。所以，毛主席特别强调看点马、列的书，强调提高三个觉悟，对共产主义除了消灭阶级这个问题以外，最重要的两个因素：一是物质；二是共产主义觉悟。没有这两个条件，“按需分配”是不能实现的。
我已经讲了“语录”是一个完整的体系，你颠倒就不利于理解毛主席的指示，这是经过反复考虑的，是围绕毛主席关于理论问题指示的顺序选编和安排的。
有的同志讲，无产阶级专政理论讲不清楚，讲不清楚的不要勉强，从实际出发，能讲多少就讲多少，讲不清楚就再学再讲，不要被讲不清楚束缚手脚。不讲不行，全国人民怎么知道？无产阶级专政的理论不要乱讲、乱解释，实事求是。当然，这样讲不要怕讲，第一次讲错了，第二次纠正就深化了。不学，哪个讲的清楚。
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['王洪文'],
      dates: [
        {
          year: 1975,
          month: 1,
          day: 14
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: `
学习理论讲话
甘肃师范翻印
一九七五年八月十九日
      `,
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}