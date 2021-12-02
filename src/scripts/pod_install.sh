if [ -d "../ios" ]; then # if it is already in packages/mobile
  cd ../ios;
fi

if [ -d "ios" ]; then
  cd ios;
fi

arch_name="$(uname -m)"
if [ "${arch_name}" = "x86_64" ]; then
  if [ "$(sysctl -in sysctl.proc_translated)" = "1" ]; then
    arch -x86_64 pod install;
  else
    pod install;
  fi
elif [ "${arch_name}" = "arm64" ]; then
  arch -x86_64 pod install;
else
  echo "Unknown architecture: ${arch_name}"
fi
