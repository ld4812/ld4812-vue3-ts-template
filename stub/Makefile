CONTAINER_NAME := my-stub

build:
	@docker build --platform linux/amd64 -t ${CONTAINER_NAME} ./
run:
	@docker run --platform linux/amd64 --name ${CONTAINER_NAME} -it -p 8080:8080 -v `pwd`:/work --rm ${CONTAINER_NAME} /bin/sh /work/start.sh