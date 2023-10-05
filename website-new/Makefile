
this_dir := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
chisel_dir := $(realpath $(this_dir)/..)
relative_to_this_dir := $(notdir $(this_dir))

mdoc_out := $(chisel_dir)/docs/generated

buildDir ?= build
subprojects = $(buildDir)/subprojects
docs = $(buildDir)/docs
website_docs_dest = docs/src/main/tut/chisel3/docs
chisel3 = ../

# Everything not in the website directory
# This is overly conservative but okay until we can do something more precise
chisel-non-website = \
  $(shell git ls-files $(chisel_dir) --exclude-per-directory $(relative_to_this_dir))

# Using introduction as standin for all md files
# Note this doesn't work when a markdown file is deleted
$(mdoc_out)/introduction.md: $(chisel-non-website)
	cd $(chisel_dir) && sbt docs/mdoc

$(this_dir)/docs/introduction.md: $(mdoc_out)/introduction.md
	mkdir -p $(shell dirname $@)
	cp -R $(mdoc_out)/* $(this_dir)/docs/

jack: $(this_dir)/docs/introduction.md
	@echo $(relative_to_this_dir)

clean:
	rm -rf $(this_dir)/docs

.PHONY: clean
