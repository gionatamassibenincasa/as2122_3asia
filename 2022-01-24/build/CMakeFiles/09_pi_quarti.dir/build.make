# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.10

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/runner/as21223asia/2022-01-24

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/runner/as21223asia/2022-01-24/build

# Include any dependencies generated for this target.
include CMakeFiles/09_pi_quarti.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/09_pi_quarti.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/09_pi_quarti.dir/flags.make

CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o: CMakeFiles/09_pi_quarti.dir/flags.make
CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o: ../pi_quarti.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/runner/as21223asia/2022-01-24/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o -c /home/runner/as21223asia/2022-01-24/pi_quarti.cpp

CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/runner/as21223asia/2022-01-24/pi_quarti.cpp > CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.i

CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/runner/as21223asia/2022-01-24/pi_quarti.cpp -o CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.s

CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.requires:

.PHONY : CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.requires

CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.provides: CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.requires
	$(MAKE) -f CMakeFiles/09_pi_quarti.dir/build.make CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.provides.build
.PHONY : CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.provides

CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.provides.build: CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o


# Object files for target 09_pi_quarti
09_pi_quarti_OBJECTS = \
"CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o"

# External object files for target 09_pi_quarti
09_pi_quarti_EXTERNAL_OBJECTS =

09_pi_quarti: CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o
09_pi_quarti: CMakeFiles/09_pi_quarti.dir/build.make
09_pi_quarti: CMakeFiles/09_pi_quarti.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/runner/as21223asia/2022-01-24/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 09_pi_quarti"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/09_pi_quarti.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/09_pi_quarti.dir/build: 09_pi_quarti

.PHONY : CMakeFiles/09_pi_quarti.dir/build

CMakeFiles/09_pi_quarti.dir/requires: CMakeFiles/09_pi_quarti.dir/pi_quarti.cpp.o.requires

.PHONY : CMakeFiles/09_pi_quarti.dir/requires

CMakeFiles/09_pi_quarti.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/09_pi_quarti.dir/cmake_clean.cmake
.PHONY : CMakeFiles/09_pi_quarti.dir/clean

CMakeFiles/09_pi_quarti.dir/depend:
	cd /home/runner/as21223asia/2022-01-24/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/runner/as21223asia/2022-01-24 /home/runner/as21223asia/2022-01-24 /home/runner/as21223asia/2022-01-24/build /home/runner/as21223asia/2022-01-24/build /home/runner/as21223asia/2022-01-24/build/CMakeFiles/09_pi_quarti.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/09_pi_quarti.dir/depend

