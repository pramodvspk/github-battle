module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Home: 'app/components/Home.jsx',
      PromptContainer: 'app/containers/PromptContainer.jsx',
      Prompt: 'app/components/Prompt.jsx',
      ConfirmBattle: 'app/components/ConfirmBattle.jsx',
      ConfirmBattleContainer: 'app/containers/ConfirmBattleContainer.jsx',
      githubHelpers: 'app/utils/githubHelpers.js',
      UserDetails: 'app/components/UserDetails.jsx',
      UserDetailsWrapper: 'app/components/UserDetailsWrapper.jsx',
      Results: 'app/components/Results.jsx',
      ResultsContainer: 'app/containers/ResultsContainer.jsx',
      MainContainer: 'app/components/MainContainer.jsx',
      Loading: 'app/components/Loading.jsx',
      styles: 'app/styles/index.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.less/, loader: 'style!css!less' },
     // Used for Bootstrap Less Source Files
     { test: /\.css/, loader: 'style!css' },
     // Used for Bootstrap Glyphicon Fonts
     { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
    ]
  }
};
