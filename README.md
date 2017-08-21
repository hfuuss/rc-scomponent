


# 项目的标题
rc-scomponent
# 简略的介绍

# 如何在本地开发运行项目
1、 git clone git@github.com:hfuuss/rc-scomponent.git   
2、 npm install   
3、 npm run lib:dev   
4、 npm run src:dev  

# 运行 linter

# 运行测试套件

# 如何贡献

# 提交 PR 的步骤

# 如何提 issues

# 代码规范的链接

# 我的规范

# 一份更新日志
* 2017年8月21日： 将测试环境和组件整合到了一块
# 开源协议 
MIT


# 从零开始搭建react组件库
####　前提：  
安装了 Node & npm  
安装了 Git　
#### 步骤：
1、创建文件夹： rc-scomponent   
2、git init  
3、npm init   
4、创建新的文件和文件夹
```
$ mkdir lib
$ touch .babelrc .eslintrc .gitignore .npmignore  README.md
$ touch lib/index.js
$ mkdir lib/components lib/elements lib/styles
```
5、执行下列命令
```
npm install babel-cli babel-core babel-eslint babel-preset-es2015 babel-preset-react eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch polished prop-types react react-dom styled-components --save-dev
```
# 初始文件配置
.babelrc
```
{
  "presets": ["es2015", "react"]
}
```
.eslintrc
```
{
  root: true,
  parser: 'babel-eslint',
  plugins: [/*'import', */'jsx-a11y', 'react'],

env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },

settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)/article>,
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

rules: {
    // [http://eslint.org/docs/rules/](http://eslint.org/docs/rules/)
    'array-callback-return': 'warn',
    'camelcase': 'warn',
    'curly': 'warn',
    'default-case': ['warn', { commentPattern: '^no default/article> }],
    'dot-location': ['warn', 'property'],
    'eol-last': 'warn',
    'eqeqeq': ['warn', 'always'],
    'indent': ['warn', 2, { "SwitchCase": 1 }],
    'guard-for-in': 'warn',
    'keyword-spacing': 'warn',
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-global-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': ['warn', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-multi-str': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': [
      'warn',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-negation': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'no-use-before-define': ['warn', 'nofunc'],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['warn', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'semi': 'warn',
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',

'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-handler-names': 'warn',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': 'warn',
    'react/jsx-no-bind': ['warn', {'allowArrowFunctions': true}],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-undef': 'warn',
    'react/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-sort-props': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/require-render-return': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': 'warn',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',

// [https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules)
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/img-has-alt': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn'
  }
}
```
.gitignore
```
.DS_Store
build
node_modules
*.log
```
.npmignore
```
.babelrc
lib
```
package.json添加以下内容
```
"scripts": {
  "build": "babel lib -d build",
  "build:watch": "babel lib -w -d build",
  "lint": "eslint lib/**; exit 0",
  "lint:watch": "esw -w lib/**",
  "prepublish": "npm run build"
},
```
# 添加组件
```
touch lib/elements/Button.js
```
内容如下：
```
import styled from 'styled-components';

const Button =styled.button`
  background: #1FB6FF;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #009EEB;
  }
`;

export default Button;
```

编辑lib/index.js：
```
import Button from './elements/Button';

module.exports = {
  Button,
};
```

在根目录下执行：  
npm link  
然后执行：  
npm run build:watch
# 下载测试环境
 $ git clone git@github.com:alanbsmith/component-lib-playground.git   
 $  cd component-lib-playground   
 $ npm install    
 根目录执行： npm link rc-scomponent   
 在src/components/App.js中我们将像使用其他外部库一样引入和调用我们的组件:
 ```
 import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'component-lib'

...

const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button>Click Me!</Button>
    </div>
  );
};

...
 ```
改变按钮颜色：
```
const Button = styled.button`
  background: #7E5BEF;
  ...
  &:hover {
    background: #592DEA;
  }
`;
```

新文件colors.js到/lib/styles
```
module.exports = {
  // light shades
  white: '#FFFFFF',
  snow: '#F9FAFC',
  darkSnow: '#EFF2F7',
  extraDarkSnow: '#E5E9F2',
  // dark tones
  silver: '#8492A6',
  slate: '#3C4858',
  steel: '#273444',
  black: '#1F2D3D',
  // dark shades
  smoke: '#E0E6ED',
  darkSmoke: '#D3DCE6',
  extraDarkSmoke: '#C0CCDA',
  // blue shades
  lightBlue: '#85D7FF',
  blue: '#1FB6FF',
  darkBlue: '#009EEB',
  // purple shades
  lightPurple: '#A389F4',
  purple: '#7E5BEF',
  darkPurple: '#592DEA',
  // pink shades
  lightPink: '#FF7CE5',
  pink: '#FF49DB',
  darkPink: '#FF16D1',
  // orange shades
  lightOrange: '#FF9E7C',
  orange: '#FF7849',
  darkOrange: '#FF5216',
  // green shades
  lightGreen: '#29EB7F',
  green: '#13CE66',
  darkGreen: '#0F9F4F',
  // yellow shades
  lightYellow: '#FFD55F',
  yellow: '#FFC82C',
  darkYellow: '#F8B700',
  // ui colors
  info: '#1FB6FF',
  success: '#13CE66',
  danger: '#FF4949',
  warning: '#FFC82C',
};
```
更新Button.js
```
...
import * as colors from '../styles/colors';

const Button = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  ...
  color: ${({ fontColor })  => colors[fontColor]};
  ...
  &:hover {
    background: ${({ hoverColor })  => colors[hoverColor]};
  }
`;

Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  hoverColor: 'darkBlue',
};

export default Button;
```

在测试应用里面调用
```
const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button
        bgColor="orange"
        hoverColor="darkOrange"
      >
        Click Me!
      </Button>
    </div>
  );
};
```

# 添加一些 Polish

```
import styled from 'styled-components';
import { darken } from 'polished';

import * as colors from '../styles/colors';

const Button = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  ...
  color: ${({ fontColor })  => colors[fontColor]};
  ...
  &:hover {
    background: ${({ bgColor })  => darken(0.1, colors[bgColor])};
  }
`;

Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
};
```
更新测试应用：
```
...
<Button bgColor="orange">
  Click Me!
</Button>
...
```

# 添加Label.js
$ touch lib/elements/Label.js
```
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const Label = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: 14px;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 0;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 300ms ease;
`;
Label.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  textTransform: PropTypes.string,
};
Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  textTransform: 'uppercase',
};
export default Label;
```
更新组件库lib/index.js
```
import Button from './elements/Button';
import Label from './elements/Label';
module.exports = {
  Button,
  Label,
};
```
更新测试应用
```
...
import { Button, Label } from 'component-lib'
...
const App = ({ name }) => {
  return (
    <div>
      <Label>Hello, {name}!</Label>
      <Button bgColor="orange">
        Click Me!
      </Button>
    </div>
  );
};
...
```


# 根据属性换样式
```
...
const labelSizes = {
  small: {
    'font-size': '12px',
    'line-height': '12px',
  },
  medium: {
    'font-size': '14px',
    'line-height': '16px',
  },
  large: {
    'font-size': '16px',
    'line-height': '16px',
  },
};
const Label = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: ${({ size }) => labelSizes[size]['font-size']};
  line-height: ${({ size }) => labelSizes[size]['line-height']};
  ...
Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  size: 'medium',
  textTransform: 'uppercase',
};
...
```

# 添加按钮的大小属性
```
...
const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};
function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}
const Button = styled.button`
  ...
  display: ${setDisplay};
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  ...
  padding: ${({ size }) => buttonSizes[size]['padding']};
  ...
  width: ${setWidth};
  ...
`;
Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
};
...
```

# 测试按钮大小属性
```
...
const App = ({ name }) => {
  return (
    <div>
      <Label size="small">Hello, {name}!</Label>
      <div>
        <Button
          bgColor="green"
          size="small"
        >
          small
        </Button>
      </div>
      <div>
        <Button
          bgColor="yellow"
          size="medium"
        >
          medium
        </Button>
      </div>
      <div>
        <Button
          bgColor="orange"
          size="large"
        >
          large
        </Button>
      </div>
      <div>
        <Button
          size="wide"
        >
          wide
        </Button>
      </div>
      <div>
        <Button
          bgColor="pink"
          size="extraWide"
        >
          extra wide
        </Button>
      </div>
      <div>
        <Button
          bgColor="purple"
          size="fullWidth"
        >
          full width
        </Button>
      </div>
    </div>
  );
};
...
```


