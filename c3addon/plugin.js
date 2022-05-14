const SDK = self.SDK

const PLUGIN_ID = 'MyCustomPlugin'

const PLUGIN_VERSION = '1.0.0.0'
const PLUGIN_CATEGORY = 'general'

const PLUGIN_CLASS = SDK.Plugins.MyCustomPlugin = class MyCustomPlugin extends SDK.IPluginBase {
  constructor () {
    super(PLUGIN_ID)

    SDK.Lang.PushContext('plugins.' + PLUGIN_ID.toLowerCase())

    this._info.SetName(self.lang('.name'))
    this._info.SetDescription(self.lang('.description'))
    this._info.SetVersion(PLUGIN_VERSION)
    this._info.SetCategory(PLUGIN_CATEGORY)
    this._info.SetAuthor('Scirra')
    this._info.SetHelpUrl(self.lang('.help-url'))
    this._info.SetIsSingleGlobal(true)

    SDK.Lang.PushContext('.properties')

    this._info.SetProperties([
      new SDK.PluginProperty('integer', 'test-property', 0)
    ])

    SDK.Lang.PopContext()   // .properties

    SDK.Lang.PopContext()
  }
}

PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS)
