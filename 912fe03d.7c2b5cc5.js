(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{211:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(1),o=t(9),r=(t(0),t(302)),i={id:"usage",title:"Usage"},p={id:"usage",title:"Usage",description:"Options for OpenAPI Generator are the same whether you're using the CLI, Maven/Gradle Plugins, or Online generation options.",source:"@site/../docs/usage.md",permalink:"/docs/usage",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/usage.md",lastUpdatedBy:"Jochen Schalanda",lastUpdatedAt:1586705778,sidebar:"docs",previous:{title:"Online",permalink:"/docs/online"},next:{title:"Using Templates",permalink:"/docs/templating"}},l=[{value:"help",id:"help",children:[]},{value:"version",id:"version",children:[]},{value:"list",id:"list",children:[]},{value:"config-help",id:"config-help",children:[]},{value:"meta",id:"meta",children:[]},{value:"validate",id:"validate",children:[]},{value:"completion",id:"completion",children:[]},{value:"generate",id:"generate",children:[{value:"Examples",id:"examples",children:[]},{value:"Target External Models",id:"target-external-models",children:[]}]},{value:"batch",id:"batch",children:[]}],s={rightToc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Options for OpenAPI Generator are the same whether you're using the CLI, Maven/Gradle Plugins, or Online generation options.\nThis page demonstrates navigating the options via CLI. Commands are presented here in a logical progression as a tutorial, but you're welcome to skip directly to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#generate"}),"generate")," command."),Object(r.b)("h2",{id:"help"},"help"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"help")," option lists all commands available to the CLI."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help\nusage: openapi-generator-cli <command> [<args>]\n\nThe most commonly used openapi-generator-cli commands are:\n    config-help   Config help for chosen lang\n    generate      Generate code with the specified generator.\n    help          Display help information\n    list          Lists the available generators\n    meta          MetaGenerator. Generator for creating a new template set and configuration for Codegen.  The output will be based on the language you specify, and includes default templates to include.\n    validate      Validate specification\n    version       Show version information\n\nSee 'openapi-generator-cli help <command>' for more information on a specific\ncommand.\n")),Object(r.b)("h2",{id:"version"},"version"),Object(r.b)("p",null,"The version command provides version information, returning either the semver version by default or the git sha when passed ",Object(r.b)("inlineCode",{parentName:"p"},"--sha"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME\n        openapi-generator-cli version - Show version information\n\nSYNOPSIS\n        openapi-generator-cli version [--sha]\n\nOPTIONS\n        --sha\n            Git commit SHA version\n\n")),Object(r.b)("h2",{id:"list"},"list"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"list")," command outputs a formatted list of every available generator. Pass the ",Object(r.b)("inlineCode",{parentName:"p"},"-s/--short")," option if you would like a CSV output for easy parsing."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help list\nNAME\n        openapi-generator-cli list - Lists the available generators\n\nSYNOPSIS\n        openapi-generator-cli list [(-i <include> | --include <include>)]\n                [(-s | --short)]\n\nOPTIONS\n        -i <include>, --include <include>\n            comma-separated list of stability indexes to include (value:\n            all,beta,stable,experimental,deprecated). Excludes deprecated by\n            default.\n\n        -s, --short\n            shortened output (suitable for scripting)\n\n")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator list -s | tr ',' '\\n'\n")),Object(r.b)("p",null,"For the full list of generators, refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generators"}),"Generators List"),"."),Object(r.b)("h2",{id:"config-help"},"config-help"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"config-help")," option provides details about "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help config-help\nNAME\n        openapi-generator-cli config-help - Config help for chosen lang\n\nSYNOPSIS\n        openapi-generator-cli config-help\n                [(-f <output format> | --format <output format>)]\n                [(-g <generator name> | --generator-name <generator name>)]\n                [--markdown-header] [--named-header]\n                [(-o <output location> | --output <output location>)]\n\nOPTIONS\n        -f <output format>, --format <output format>\n            Write output files in the desired format. Options are 'text',\n            'markdown' or 'yamlsample'. Default is 'text'.\n\n        -g <generator name>, --generator-name <generator name>\n            generator to get config help for\n\n        --markdown-header\n            When format=markdown, include this option to write out markdown\n            headers (e.g. for docusaurus).\n\n        --named-header\n            Header includes the generator name, for clarity in output\n\n        -o <output location>, --output <output location>\n            Optionally write help to this location, otherwise default is\n            standard output\n\n")),Object(r.b)("p",null,"The option of note is ",Object(r.b)("inlineCode",{parentName:"p"},"-g/--generator-name")," (other options are exposed for tooling)."),Object(r.b)("p",null,"You may pass any generator name (see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#list"}),"list")," command) to ",Object(r.b)("inlineCode",{parentName:"p"},"-g"),", and options specific to that generator will be displayed. Some generators have ",Object(r.b)("em",{parentName:"p"},"many")," options, while others may have only a few."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator config-help -g go\n")),Object(r.b)("p",null,"Outputs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"CONFIG OPTIONS\n    packageName\n        Go package name (convention: lowercase). (Default: openapi)\n\n    hideGenerationTimestamp\n        Hides the generation timestamp when files are generated. (Default: true)\n\n    packageVersion\n        Go package version. (Default: 1.0.0)\n\n    withGoCodegenComment\n        whether to include Go codegen comment to disable Go Lint and collapse by default in GitHub PRs and diffs (Default: false)\n\n    withXml\n        whether to include support for application/xml content type and include XML annotations in the model (works with libraries that provide support for JSON and XML) (Default: false)\n\n    prependFormOrBodyParameters\n        Add form or body parameters to the beginning of the parameter list. (Default: false)\n")),Object(r.b)("p",null,"To pass these go client generator-specific options to the ",Object(r.b)("inlineCode",{parentName:"p"},"generate")," command for a go client, use the ",Object(r.b)("inlineCode",{parentName:"p"},"--additional-properties")," option. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#generate"}),"generate")," command section for an example."),Object(r.b)("h2",{id:"meta"},"meta"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"meta")," command creates a new Java class and template files, used for creating your own custom templates."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help meta\nNAME\n        openapi-generator-cli meta - MetaGenerator. Generator for creating a new\n        template set and configuration for Codegen. The output will be based on\n        the language you specify, and includes default templates to include.\n\nSYNOPSIS\n        openapi-generator-cli meta [(-n <name> | --name <name>)]\n                [(-o <output directory> | --output <output directory>)]\n                [(-p <package> | --package <package>)] [(-t <type> | --type <type>)]\n\nOPTIONS\n        -n <name>, --name <name>\n            the human-readable name of the generator\n\n        -o <output directory>, --output <output directory>\n            where to write the generated files (current dir by default)\n\n        -p <package>, --package <package>\n            the package to put the main class into (defaults to\n            org.openapitools.codegen)\n\n        -t <type>, --type <type>\n            the type of generator that is created\n")),Object(r.b)("p",null,"For an in-depth example of using the ",Object(r.b)("inlineCode",{parentName:"p"},"meta")," command, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/customization"}),"Customization"),"."),Object(r.b)("h2",{id:"validate"},"validate"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"validate")," command allows you to validate an input specification, optionally providing recommendations for error fixes or other improvements (if available)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help validate\nNAME\n        openapi-generator-cli validate - Validate specification\n\nSYNOPSIS\n        openapi-generator-cli validate\n                (-i <spec file> | --input-spec <spec file>) [--recommend]\n\nOPTIONS\n        -i <spec file>, --input-spec <spec file>\n            location of the OpenAPI spec, as URL or file (required)\n\n        --recommend\n\n")),Object(r.b)("p",null,"Valid Spec Example (using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator-gradle-plugin/samples/local-spec/petstore-v3.0.yaml"}),"petstore-v3.0.yaml"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator validate -i petstore-v3.0.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Validating spec (petstore-v3.0.yaml)\nNo validation issues detected.\n")),Object(r.b)("p",null,"Invalid Spec Example (using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator-gradle-plugin/samples/local-spec/petstore-v3.0-invalid.yaml"}),"petstore-v3.0-invalid.yaml"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator validate -i petstore-v3.0-invalid.yaml\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Validating spec (petstore-v3.0-invalid.yaml)\nErrors:\n    -attribute info is missing\n\n[error] Spec has 1 errors.\n")),Object(r.b)("h2",{id:"completion"},"completion"),Object(r.b)("p",null,"Although not documented in the ",Object(r.b)("inlineCode",{parentName:"p"},"help")," output, the CLI offers a ",Object(r.b)("inlineCode",{parentName:"p"},"completion")," command, which can be used for auto-completion."),Object(r.b)("p",null,"This command takes one or more parameters representing the args list you would otherwise pass to ",Object(r.b)("inlineCode",{parentName:"p"},"openapi-generator"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator completion config-help\n-o\n--output\n--named-header\n-g\n--generator-name\n-f\n--format\n--markdown-header\n")),Object(r.b)("p",null,"An example bash completion script can be found in the repo at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/scripts/openapi-generator-cli-completion.bash"}),"scripts/openapi-generator-cli-completion.bash"),"."),Object(r.b)("h2",{id:"generate"},"generate"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"generate")," command is the workhorse of the generator toolset. As such, it has ",Object(r.b)("em",{parentName:"p"},"many")," more options available than the previous commands. The abbreviated options are below, but you may expand the full descriptions."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help generate\nNAME\n        openapi-generator-cli generate - Generate code with the specified\n        generator.\n\nSYNOPSIS\n        openapi-generator-cli generate\n                [(-a <authorization> | --auth <authorization>)]\n                [--api-name-suffix <api name suffix>] [--api-package <api package>]\n                [--artifact-id <artifact id>] [--artifact-version <artifact version>]\n                [(-c <configuration file> | --config <configuration file>)]\n                [-D <system properties>...] [--dry-run]\n                [(-e <templating engine> | --engine <templating engine>)]\n                [--enable-post-process-file]\n                [(-g <generator name> | --generator-name <generator name>)]\n                [--generate-alias-as-model] [--git-host <git host>]\n                [--git-repo-id <git repo id>] [--git-user-id <git user id>]\n                [--group-id <group id>] [--http-user-agent <http user agent>]\n                (-i <spec file> | --input-spec <spec file>)\n                [--ignore-file-override <ignore file override location>]\n                [--import-mappings <import mappings>...]\n                [--instantiation-types <instantiation types>...]\n                [--invoker-package <invoker package>]\n                [--language-specific-primitives <language specific primitives>...]\n                [--library <library>] [--log-to-stderr] [--minimal-update]\n                [--model-name-prefix <model name prefix>]\n                [--model-name-suffix <model name suffix>]\n                [--model-package <model package>]\n                [(-o <output directory> | --output <output directory>)] \n                [(-p <additional properties> | --additional-properties <additional properties>)...]\n                [--package-name <package name>] [--release-note <release note>]\n                [--remove-operation-id-prefix]\n                [--reserved-words-mappings <reserved word mappings>...]\n                [(-s | --skip-overwrite)] [--server-variables <server variables>...]\n                [--skip-validate-spec] [--strict-spec <true/false strict behavior>]\n                [(-t <template directory> | --template-dir <template directory>)]\n                [--type-mappings <type mappings>...] [(-v | --verbose)]\n")),Object(r.b)("details",null,Object(r.b)("summary",null,"generate OPTIONS"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"OPTIONS\n        -a <authorization>, --auth <authorization>\n            adds authorization headers when fetching the OpenAPI definitions\n            remotely. Pass in a URL-encoded string of name:header with a comma\n            separating multiple values\n\n        --api-name-suffix <api name suffix>\n            Suffix that will be appended to all API names ('tags'). Default:\n            Api. e.g. Pet => PetApi. Note: Only ruby, python, jaxrs generators\n            suppport this feature at the moment.\n\n        --api-package <api package>\n            package for generated api classes\n\n        --artifact-id <artifact id>\n            artifactId in generated pom.xml. This also becomes part of the\n            generated library's filename\n\n        --artifact-version <artifact version>\n            artifact version in generated pom.xml. This also becomes part of the\n            generated library's filename\n\n        -c <configuration file>, --config <configuration file>\n            Path to configuration file. It can be JSON or YAML. If file is JSON,\n            the content should have the format {\"optionKey\":\"optionValue\",\n            \"optionKey1\":\"optionValue1\"...}. If file is YAML, the content should\n            have the format optionKey: optionValue. Supported options can be\n            different for each language. Run config-help -g {generator name}\n            command for language-specific config options.\n\n        -D <system properties>\n            sets specified system properties in the format of\n            name=value,name=value (or multiple options, each with name=value)\n\n        --dry-run\n            Try things out and report on potential changes (without actually\n            making changes).\n\n        -e <templating engine>, --engine <templating engine>\n            templating engine: \"mustache\" (default) or \"handlebars\" (beta)\n\n        --enable-post-process-file\n            Enable post-processing file using environment variables.\n\n        -g <generator name>, --generator-name <generator name>\n            generator to use (see list command for list)\n\n        --generate-alias-as-model\n            Generate model implementation for aliases to map and array schemas.\n            An 'alias' is an array, map, or list which is defined inline in a \n            OpenAPI document and becomes a model in the generated code.\n            A 'map' schema is an object that can have undeclared properties,\n            i.e. the 'additionalproperties' attribute is set on that object.\n            An 'array' schema is a list of sub schemas in a OAS document.\n\n        --git-host <git host>\n            Git host, e.g. gitlab.com.\n\n        --git-repo-id <git repo id>\n            Git repo ID, e.g. openapi-generator.\n\n        --git-user-id <git user id>\n            Git user ID, e.g. openapitools.\n\n        --group-id <group id>\n            groupId in generated pom.xml\n\n        --http-user-agent <http user agent>\n            HTTP user agent, e.g. codegen_csharp_api_client, default to\n            'OpenAPI-Generator/{packageVersion}}/{language}'\n\n        -i <spec file>, --input-spec <spec file>\n            location of the OpenAPI spec, as URL or file (required)\n\n        --ignore-file-override <ignore file override location>\n            Specifies an override location for the .openapi-generator-ignore\n            file. Most useful on initial generation.\n\n        --import-mappings <import mappings>\n            specifies mappings between a given class and the import that should\n            be used for that class in the format of type=import,type=import. You\n            can also have multiple occurrences of this option.\n\n        --instantiation-types <instantiation types>\n            sets instantiation type mappings in the format of\n            type=instantiatedType,type=instantiatedType.For example (in Java):\n            array=ArrayList,map=HashMap. In other words array types will get\n            instantiated as ArrayList in generated code. You can also have\n            multiple occurrences of this option.\n\n        --invoker-package <invoker package>\n            root package for generated code\n\n        --language-specific-primitives <language specific primitives>\n            specifies additional language specific primitive types in the format\n            of type1,type2,type3,type3. For example:\n            String,boolean,Boolean,Double. You can also have multiple\n            occurrences of this option.\n\n        --library <library>\n            library template (sub-template)\n\n        --log-to-stderr\n            write all log messages (not just errors) to STDOUT. Useful for\n            piping the JSON output of debug options (e.g. `-DdebugOperations`)\n            to an external parser directly while testing a generator.\n\n        --minimal-update\n            Only write output files that have changed.\n\n        --model-name-prefix <model name prefix>\n            Prefix that will be prepended to all model names.\n\n        --model-name-suffix <model name suffix>\n            Suffix that will be appended to all model names.\n\n        --model-package <model package>\n            package for generated models\n\n        -o <output directory>, --output <output directory>\n            where to write the generated files (current dir by default)\n\n        -p <additional properties>, --additional-properties <additional\n        properties>\n            sets additional properties that can be referenced by the mustache\n            templates in the format of name=value,name=value. You can also have\n            multiple occurrences of this option.\n\n        --package-name <package name>\n            package for generated classes (where supported)\n\n        --release-note <release note>\n            Release note, default to 'Minor update'.\n\n        --remove-operation-id-prefix\n            Remove prefix of operationId, e.g. config_getId => getId\n\n        --reserved-words-mappings <reserved word mappings>\n            specifies how a reserved name should be escaped to. Otherwise, the\n            default _<name> is used. For example id=identifier. You can also\n            have multiple occurrences of this option.\n\n        -s, --skip-overwrite\n            specifies if the existing files should be overwritten during the\n            generation.\n\n        --server-variables <server variables>\n            sets server variables overrides for spec documents which support\n            variable templating of servers.\n\n        --skip-validate-spec\n            Skips the default behavior of validating an input specification.\n\n        --strict-spec <true/false strict behavior>\n            'MUST' and 'SHALL' wording in OpenAPI spec is strictly adhered to.\n            e.g. when false, no fixes will be applied to documents which pass\n            validation but don't follow the spec.\n\n        -t <template directory>, --template-dir <template directory>\n            folder containing the template files\n\n        --type-mappings <type mappings>\n            sets mappings between OpenAPI spec types and generated code types in\n            the format of OpenAPIType=generatedType,OpenAPIType=generatedType.\n            For example: array=List,map=Map,string=String. You can also have\n            multiple occurrences of this option.\n\n        -v, --verbose\n            verbose mode\n\n"))),Object(r.b)("p",null,"At a minimum, ",Object(r.b)("inlineCode",{parentName:"p"},"generate")," requires:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-g")," to specify the generator"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-o")," to specify a meaningful output directory (defaults to the current directory!)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-i")," to specify the input OpenAPI document")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")," You may also pass ",Object(r.b)("inlineCode",{parentName:"p"},"-Dcolor")," as a system property to colorize terminal outputs.")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"The following examples use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}),"petstore.yaml"),"."),Object(r.b)("h4",{id:"additional-properties"},"Additional Properties"),Object(r.b)("p",null,"Generator-specific options should be passed as ",Object(r.b)("inlineCode",{parentName:"p"},"--additional-properties"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -g go --additional-properties=prependFormOrBodyParameters=true \\\n    -o out -i petstore.yaml\n")),Object(r.b)("p",null,"Pass more options via comma delimited key/value pairs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"--additional-properties=key1=value1,key2=value2\n")),Object(r.b)("p",null,"For the full list of generator-specific parameters, refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generators"}),"generators docs"),"."),Object(r.b)("h4",{id:"type-mappings-and-import-mappings"},"Type Mappings and Import Mappings"),Object(r.b)("p",null,"Most generators allow for types bound to the OpenAPI Specification's types to be remapped to a user's desired types. Not ",Object(r.b)("em",{parentName:"p"},"all")," type mappings can be reassigned, as some generators define mappings which are tightly coupled to the built-in templates."),Object(r.b)("p",null,"If you're not using your own templates with star/glob package imports, you will most likely need to combine ",Object(r.b)("inlineCode",{parentName:"p"},"--type-mappings")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--import-mappings")," together."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--type-mappings")," Defines the user's target type"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--import-mappings")," Informs the template of the type to be imported")),Object(r.b)("p",null,"Here's how one might change the ",Object(r.b)("inlineCode",{parentName:"p"},"kotlin-spring")," server generator's default of ",Object(r.b)("inlineCode",{parentName:"p"},"OffsetDateTime")," to ",Object(r.b)("inlineCode",{parentName:"p"},"LocalDateTime"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate \\\n    -i petstore.yaml \\\n    -g kotlin-spring \\\n    -o out \\\n    --additional-properties=library=spring-boot,beanValidations=true,swaggerAnnotations=true,serviceImplementation=true \\\n    --import-mappings=DateTime=java.time.LocalDateTime \\\n    --type-mappings=DateTime=java.time.LocalDateTime\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: mappings are applied to ",Object(r.b)("inlineCode",{parentName:"p"},"DateTime"),", as this is the representation of the primitive type. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/7cee999543fcc00b7c1eb9f70f0456b707c7f9e2/modules/openapi-generator/src/main/java/org/openapitools/codegen/DefaultCodegen.java#L1431"}),"DefaultCodegen"),".")),Object(r.b)("h3",{id:"target-external-models"},"Target External Models"),Object(r.b)("p",null,"Sometimes you don't want the codegen to make a model for you--you might want to just include one that already exists in your codebase.  Say you already have a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," object and want to reuse that, which has a different model package from the other generated files:"),Object(r.b)("p",null,"First, indicate that the class is already included by default. This will keep the codegen from trying to generate the class."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"--language-specific-primitives=Pet\n")),Object(r.b)("p",null,"This command line option will tell the generator to consider ",Object(r.b)("inlineCode",{parentName:"p"},"Pet"),' a "primitive" type.'),Object(r.b)("p",null,"Next, if the ",Object(r.b)("inlineCode",{parentName:"p"},"Pet")," class is a different package, add an ",Object(r.b)("inlineCode",{parentName:"p"},"--import-mapping")," to tell the generator to include that import wherever ",Object(r.b)("inlineCode",{parentName:"p"},"Pet")," is used:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"--import-mappings=Pet=com.yourpackage.models.Pet\n")),Object(r.b)("p",null,"Now the codegen will know what to import from that specific package."),Object(r.b)("p",null,"NOTE: ",Object(r.b)("inlineCode",{parentName:"p"},"import-mappings")," is assigned a key-value pair in this example, but multiple values can be comma-separate. For instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"--import-mappings=Pet=com.yourpackage.models.Pet,User=com.yourpackage.models.User\n")),Object(r.b)("h4",{id:"configuration-file"},"Configuration File"),Object(r.b)("p",null,"Rather than passing generator options in a CSV of ",Object(r.b)("inlineCode",{parentName:"p"},"--additional-properties"),", you may also provide the settings via JSON file or YAML file."),Object(r.b)("p",null,"For example, one of our typescript samples has the following configuration file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "npmName": "@swagger/typescript-fetch-petstore",\n  "npmVersion": "1.0.0",\n  "npmRepository" : "https://skimdb.npmjs.com/registry",\n  "snapshot" : false,\n  "supportsES6": true\n}\n')),Object(r.b)("p",null,"These settings can be passed via ",Object(r.b)("inlineCode",{parentName:"p"},"-c filename"),". Here, we've saved the above as ",Object(r.b)("inlineCode",{parentName:"p"},"config.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -i petstore.yaml -g typescript-fetch -o out \\\n    -c config.json\n")),Object(r.b)("p",null,"Same configuration file can be passed into YAML format having following equivalent content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'npmName: "@swagger/typescript-fetch-petstore"\nnpmVersion: "1.0.0"\nnpmRepository: "https://skimdb.npmjs.com/registry"\nsnapshot: false\nsupportsES6: true\n')),Object(r.b)("p",null,"The settings are passed exactly the same as for ",Object(r.b)("inlineCode",{parentName:"p"},"config.json"),". The most important part is the file extension. Supported values are ",Object(r.b)("inlineCode",{parentName:"p"},"yml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yaml"),".\nThe name of the file should be ",Object(r.b)("inlineCode",{parentName:"p"},"config.yml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"config.yaml")," (in our example it will be ",Object(r.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -i petstore.yaml -g typescript-fetch -o out \\\n    -c config.yaml\n")),Object(r.b)("h2",{id:"batch"},"batch"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"batch")," command allows you to move all CLI arguments supported by the ",Object(r.b)("inlineCode",{parentName:"p"},"generate")," command into a YAML or JSON file."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NOTE"),": This command supports an additional ",Object(r.b)("inlineCode",{parentName:"p"},"!include"),' property which may point to another "shared" file, the base path to which can be\nmodified by ',Object(r.b)("inlineCode",{parentName:"p"},"--includes-base-dir"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator help batch\nNAME\n        openapi-generator-cli batch - Generate code in batch via external\n        configs.\n\nSYNOPSIS\n        openapi-generator-cli batch [--fail-fast]\n                [--includes-base-dir <includes>] [(-r <threads> | --threads <threads>)]\n                [--root-dir <root>] [--timeout <timeout>] [(-v | --verbose)] [--]\n                <configs>...\n\nOPTIONS\n        --fail-fast\n            fail fast on any errors\n\n        --includes-base-dir <includes>\n            base directory used for includes\n\n        -r <threads>, --threads <threads>\n            thread count\n\n        --root-dir <root>\n            root directory used output/includes (includes can be overridden)\n\n        --timeout <timeout>\n            execution timeout (minutes)\n\n        -v, --verbose\n            verbose mode\n\n        --\n            This option can be used to separate command-line options from the\n            list of argument, (useful when arguments might be mistaken for\n            command-line options\n\n        <configs>\n            Generator configuration files.\n")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# create "shared" config\nmkdir shared && cat > shared/common.yaml <<EOF\ninputSpec: https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml\nadditionalProperties:\n    x-ext-name: "Your Name"\nEOF\n\n# create "standard" configs\ncat > kotlin.yaml <<EOF\n\'!include\': \'shared/common.yaml\'\noutputDir: out/kotlin\ngeneratorName: kotlin\nartifactId: kotlin-petstore-string\nadditionalProperties:\n  dateLibrary: string\n  serializableModel: "true"\nEOF\n\ncat > csharp.yaml <<EOF\n\'!include\': \'shared/common.yaml\'\noutputDir: out/csharp-netcore\ngeneratorName: csharp-netcore\nadditionalProperties:\n  packageGuid: "{321C8C3F-0156-40C1-AE42-D59761FB9B6C}"\n  useCompareNetObjects: "true"\nEOF\n\n# Generate them\nopenapi-generator batch *.yaml\n')))}c.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),c=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},m=function(e){var n=c(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),b=a,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||r;return t?o.a.createElement(u,p({ref:n},s,{components:t})):o.a.createElement(u,p({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);