SRC_DIR = ./src
DIST_DIR = ./dist
TEST_DIR = ./tests

merge: 
	cat ${SRC_DIR}/Seiya.js ${SRC_DIR}/shim.js ${SRC_DIR}/Class.js ${SRC_DIR}/Model.js > ${DIST_DIR}/Seiya.js

test:
	mocha ${TEST_DIR}/test*.js
