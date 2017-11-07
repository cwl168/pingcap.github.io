#!/bin/bash

# created by sivagao in 9/9/2017

set -e

replace_dist_html_link() {
  local doc_tmp_path=$1
  local repo_name=$2
  if [ -d "$doc_tmp_path" ];then
    for html in "$doc_tmp_path"/*
    do
      echo "$html"
      # [ "$html" = "." -o "$html" = ".." ] && continue
      if [ -d "$html" ];then
        echo "process sub dir: " $html
        replace_dist_html_link "$html" $repo_name
      fi
      if [[ ! -d "$html" ]] && echo "$html" | grep -E '\.html$' > /dev/null;then

        # using double quote to variable, using [\"] to
        # sed -i -r 's;<img\s*src="([\.\/]*)media/(.*)"\s*(alt=".*?")?\s*/?>;<img src="/images/'"$repo_name"'/\2" \3 />;g' $html
       sed -i -r 's;<img\s*src="([\.\/]*)media/(.*)"\s*(alt=".*?")?\s*/?>;<img src="/images/'"$repo_name"'/\2" \3 />;g' $html
        # cat _tmp_out1 > $doc_tmp_path/$html
      fi
    done
  fi
}

cn_tmp_docs_path="dist/docs-cn"
en_tmp_docs_path="dist/docs"
replace_dist_html_link "$cn_tmp_docs_path" docs-cn
replace_dist_html_link "$en_tmp_docs_path" docs

cn_tmp_blogs_path="dist/blog-cn"
en_tmp_blogs_path="dist/blog"
replace_dist_html_link "$cn_tmp_blogs_path" blog-cn
replace_dist_html_link "$en_tmp_blogs_path" blog

replace_dist_html_link "dist/meetup" meetup
replace_dist_html_link "dist/weekly" weekly


parent_dir="`echo $(pwd) | sed 's;/scripts;;g'`/dist"
copy_images_from_media_to_src() {
  repo_name=$1
  media_path=$(echo $parent_dir/$repo_name/media)
  echo $media_path
  echo $parent_dir/images/$repo_name
  [ -d $media_path ] && mv $media_path $parent_dir/images/$repo_name # cp -R
}

# mv all content in media to src/images
copy_images_from_media_to_src docs
copy_images_from_media_to_src docs-cn
copy_images_from_media_to_src blog-cn
copy_images_from_media_to_src blog
copy_images_from_media_to_src weekly
copy_images_from_media_to_src meetup
