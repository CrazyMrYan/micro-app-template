#!/bin/bash
OUTPUT_DIR=dist

rm -rf $OUTPUT_DIR

mkdir $OUTPUT_DIR
mkdir ./$OUTPUT_DIR/mirco-app

# # sub-home子应用
# cp -r ./sub-home/dist/ ./dist/subapp/sub-home/

# sub-first子应用
cp -r ./packages/field-system/dist/ $OUTPUT_DIR/mirco-app/field-system
rm -rf ./packages/field-system/dist/

# main基座
cp -r ./packages/main/dist/ $OUTPUT_DIR
rm -rf ./packages/main/dist/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
