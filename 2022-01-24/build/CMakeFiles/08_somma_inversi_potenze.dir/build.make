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
include CMakeFiles/08_somma_inversi_potenze.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/08_somma_inversi_potenze.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/08_somma_inversi_potenze.dir/flags.make

CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o: CMakeFiles/08_somma_inversi_potenze.dir/flags.make
CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o: ../somma_inversi_potenze.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/runner/as21223asia/2022-01-24/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o -c /home/runner/as21223asia/2022-01-24/somma_inversi_potenze.cpp

CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/runner/as21223asia/2022-01-24/somma_inversi_potenze.cpp > CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.i

CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/runner/as21223asia/2022-01-24/somma_inversi_potenze.cpp -o CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.s

CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.requires:

.PHONY : CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.requires

CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.provides: CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.requires
	$(MAKE) -f CMakeFiles/08_somma_inversi_potenze.dir/build.make CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.provides.build
.PHONY : CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.provides

CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.provides.build: CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o


# Object files for target 08_somma_inversi_potenze
08_somma_inversi_potenze_OBJECTS = \
"CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o"

# External object files for target 08_somma_inversi_potenze
08_somma_inversi_potenze_EXTERNAL_OBJECTS =

08_somma_inversi_potenze: CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o
08_somma_inversi_potenze: CMakeFiles/08_somma_inversi_potenze.dir/build.make
08_somma_inversi_potenze: CMakeFiles/08_somma_inversi_potenze.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/runner/as21223asia/2022-01-24/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable 08_somma_inversi_potenze"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/08_somma_inversi_potenze.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/08_somma_inversi_potenze.dir/build: 08_somma_inversi_potenze

.PHONY : CMakeFiles/08_somma_inversi_potenze.dir/build

CMakeFiles/08_somma_inversi_potenze.dir/requires: CMakeFiles/08_somma_inversi_potenze.dir/somma_inversi_potenze.cpp.o.requires

.PHONY : CMakeFiles/08_somma_inversi_potenze.dir/requires

CMakeFiles/08_somma_inversi_potenze.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/08_somma_inversi_potenze.dir/cmake_clean.cmake
.PHONY : CMakeFiles/08_somma_inversi_potenze.dir/clean

CMakeFiles/08_somma_inversi_potenze.dir/depend:
	cd /home/runner/as21223asia/2022-01-24/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/runner/as21223asia/2022-01-24 /home/runner/as21223asia/2022-01-24 /home/runner/as21223asia/2022-01-24/build /home/runner/as21223asia/2022-01-24/build /home/runner/as21223asia/2022-01-24/build/CMakeFiles/08_somma_inversi_potenze.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/08_somma_inversi_potenze.dir/depend

