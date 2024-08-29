export const module = {
    rules: [
        {
            test: /pdf\.worker\.jsx$/,
            use: { loader: 'worker-loader' }
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
};
export const resolve = {
    extensions: ['.tsx', '.ts', '.js','.jsx']
};
  