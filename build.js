const StyleDictionaryPackage = require('style-dictionary');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
    name: 'css/variables',
    formatter: function (dictionary, config) {
        return `${this.selector} {
        ${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}
      }`
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'sizes/px',
    type: 'value',
    matcher: function (prop) {
        // You can be more specific here if you only want 'em' units for font sizes    
        return ["fontSizes", "lineHeights", "spacing", "borderRadius", "borderWidth", "sizing"].includes(prop.type);
    },
    transformer: function (prop) {
        // You can also modify the value here if you want to convert pixels to ems
        return parseFloat(prop.original.value) + 'px';
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'typography/px',
    type: 'value',
    matcher: function (prop) {
        return prop.path.includes('fontSize') || prop.path.includes('lineHeight') || prop.path.includes('letterSpacing') || prop.path.includes('paragraphSpacing')
    },
    transformer: function (prop) {
        return parseFloat(prop.value) + 'px';
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'typography/family',
    type: 'value',
    matcher: function (prop) {
        return prop.path.includes('fontFamily')
    },
    transformer: function (prop) {
        return `'${prop.value}'`
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'typography/fontWeight',
    type: 'value',
    matcher: function (prop) {
        return prop.path.includes('fontWeight')
    },
    transformer: function (prop) {
        const thisValue = prop.value
        switch (thisValue) {
            case 'Regular':
                return '400'
                break
            case 'Bold': 
                return '700'
                break
            case 'Medium':
                return '500'
                break
            case 'Thin':
                return '100'
                break
            case 'Extra Light':
                return '200'
            case 'Light':
                return '300'
                break
            case 'Semi Bold':
                return '600'
                break
            case 'Extra Bold':
                return '800'
                break
            case 'Black':
                return '900'
                break
            case 'Heavy':
                return '900'
                break
            default:
                return 'normal'
        }
    }
});

StyleDictionaryPackage.registerTransform({
    name: 'shadow/spreadShadow',
    type: 'value',
    matcher: function (prop) {
        return prop.type === 'boxShadow';
    },
    transformer: function (prop) {
        const shadow = Object.values(prop.value);
        const [x, y, blur, spread, color] = shadow.map((s) => s.toString());
        return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    } 
});

function getStyleDictionaryConfig(theme) {
    return {
        "source": [
            `tokens/${theme}.json`,
        ],
        "platforms": {
            /* "web": {
              "transforms": ["attribute/cti", "name/cti/kebab", "sizes/px"],
              "buildPath": `output/`,
              "files": [{
                  "destination": `${theme}.css`,
                  "format": "css/variables",
                  "selector": `.${theme}-theme`
                }]
            }, */
            "scss": {
                "transforms": ["attribute/cti", "name/cti/kebab", "sizes/px", "shadow/spreadShadow","typography/px", "typography/fontWeight", "typography/family"],
                "buildPath": `src/styles/settings/`,
                "files": [{
                    "destination": `${theme}.scss`,
                    "format": "scss/variables"
                }]
            }
        }
    };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['_tokens', '_virgin'].map(function (theme) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

    // StyleDictionary.buildPlatform('web');
    StyleDictionary.buildPlatform('scss');

    console.log('\nEnd processing');
})

console.log('\n==============================================');
console.log('\nBuild completed!');