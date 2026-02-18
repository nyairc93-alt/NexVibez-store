# Remove .next directory from Git's index

# This command removes the .next directory from staging area
# without deleting it from the filesystem.
git rm -rf --cached .next

# Commit message
This commit removes the .next directory from the index without deleting it from the filesystem.