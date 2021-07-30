.PHONY: build clean view serve deploy

build: node_modules
	yarn build

serve: node_modules
	yarn start

clean:
	rm -rf build

view:
	open build/index.html

node_modules: package.json
	yarn


# Deployment.

RSYNCARGS := --compress --recursive --checksum --itemize-changes \
	--delete -e ssh --perms --chmod=Du=rwx,Dgo=rx,Fu=rw,Fog=r
DEST := courses:coursewww/capra.cs.cornell.edu/htdocs/public

deploy: clean build
	rsync $(RSYNCARGS) build/ $(DEST)
