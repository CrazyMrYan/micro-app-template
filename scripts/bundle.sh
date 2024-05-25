#!/bin/bash
OUTPUT_DIR=dist
MIRCO_APPS_DIR=mirco-apps
TIMESTAMP=$(date +"%Y%m%d%H%M%S")

rm -rf $OUTPUT_DIR

mkdir $OUTPUT_DIR
mkdir ./$OUTPUT_DIR/$MIRCO_APPS_DIR

# # sub-home子应用
# cp -r ./sub-home/dist/ ./dist/subapp/sub-home/

# sub-first子应用
cp -r ./packages/field-system/dist/ $OUTPUT_DIR/$MIRCO_APPS_DIR/field-system
rm -rf ./packages/field-system/dist/

# main基座
cp -r ./packages/main/dist/ $OUTPUT_DIR
rm -rf ./packages/main/dist/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
tar -czvf dist-$TIMESTAMP.tar.gz $OUTPUT_DIR
# cd ..
echo 'bundle.sh execute success.'
